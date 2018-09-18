const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Why hello there, General Kenobi.',
}));

module.exports = app;
