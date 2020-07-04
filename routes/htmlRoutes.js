/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const path = require('path');
const router = require('express').Router();

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/', (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect('/members');
  }
  res.sendFile(path.join(__dirname, '../public/signup.html'));
});

router.get('/login', (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect('/members');
  }
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

// Here we've add our isAuthenticated middleware to this route.

router.get('/members', isAuthenticated, (req, res) => {
  console.log('code should come here');
  res.sendFile(path.join(__dirname, '../public/members.html'));
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
module.exports = router;
