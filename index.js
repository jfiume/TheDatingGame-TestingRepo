const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AuthController = require('./controllers/auth_controller');

const app = express();
const router = require('./routes/router');

mongoose.connect('mongodb://localhost:testOauth/testOauth');


const protectedAction = function(req, res) {
  res.send("Here's some protected information!");
};

router.route('/facebook_auth')
  .post(AuthController.facebookAuth);
router.route('/protected')
  .get([AuthController.requireAuth, protectedAction]);

app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
app.use('/v1', router);

app.listen(3000, '127.0.0.1', function(err) {
  if (err) { return console.log(err); }
  console.log("Listening on port 3000.");
});
