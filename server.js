/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

const express = require('express');
// const expressValidator = require('express-validator');
const session = require('express-session');

// requiring passport as we 've configured it

const passport = require('./config/passport');

// Setting up the port and requiring models for syncing

const PORT = process.env.PORT || 3000;
const db = require('./models');

// required our API and HTML Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// creating express app and configuring middleware needed for authentication

const app = express();
<<<<<<< HEAD
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(express.urlencoded({ extended: true }));
=======

app.use(express.urlencoded({
  extended: true,
}));
>>>>>>> 2e743fba128e74d47b5712e495d3a03cebf0ab9c
app.use(express.json());
// app.use(expressValidator);
app.use(express.static('public'));

// we need to use sessions to keep track of our users' login

<<<<<<< HEAD
=======
app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }),
);
>>>>>>> 2e743fba128e74d47b5712e495d3a03cebf0ab9c
app.use(passport.initialize());
app.use(passport.session());

// requiring routes

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});