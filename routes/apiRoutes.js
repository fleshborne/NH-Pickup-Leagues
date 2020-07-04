/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const router = require('express').Router();
const db = require('../models');
const passport = require('../config/passport');

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post('/login', passport.authenticate('local'), function (req, res) {
  res.json(req.user);
});

// otherwise send back an error
router.post('/signup', (req, res) => {
  db.User.create({
    // username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then(() => {
      res.redirect(307, '/members');
      console.log('user created');
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

// // Route for logging user out
// router.get('/logout', function (req, res) {
//   req.logout();
//   res.redirect('/');
// });

// Route for getting some data about our user to be used client side
router.get('/user_data', (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

module.exports = router;
