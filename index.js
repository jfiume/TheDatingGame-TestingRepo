const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./routes/router');

mongoose.connect('mongodb://localhost:3000/TheDatingGame');

app.use(morgan('combined'));
app.use('/v1', router);

app.listen(3000, '127.0.0.1', function(err) {
  if (err) { return console.log(err); }
  console.log("Listening on port 3000.");
});
