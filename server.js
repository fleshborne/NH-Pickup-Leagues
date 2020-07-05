/* eslint-disable linebreak-style */
const express = require('express');
const session = require('express-session');

// requiring passport as we 've configured it

const passport = require('./config/passport');

// Setting up the port and requiring models for syncing

const PORT = process.env.PORT || 8081;
const db = require('./models');

// required our API and HTML Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// creating express app and configuring middleware needed for authentication

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// we need to use sessions to keep track of our users' login
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
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
