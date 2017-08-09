const jwt = require('jwt-simple');
const User = require('../models/user');
const axios = require('axios');
const SECRET = require('../config');

function tokenForUser (user) {
  let obj = {
    sub: user._id,
    iat: new Date().getTime()
  };
  return jwt.encode(obj, SECRET);
}

exports.requireAuth = function(req, res, next) {
  let authHeader = req.get('Authorization');
  let jwtToken = jwt.decode(authHeader);
  let user_id = jwtToken.sub;
  User.findById(user_id, function(err, user) {
    if (err) { return next(err); }
    if (!user) { return next(new Error("User not found.")); }
    req.user = user;
    next();
  });
};

exports.facebookAuth = function(req, res, next) {
  let token = req.body.token;
  axios.get(`https://graph.facebook.com/v2.8/me?fields=id,name,email&access_token=${token}`).then(function (response) {
    let facebook_id = response.data.id;
    let name = response.data.name;
    let email = response.data.email;
    User.find({facebook_id: response.data.id}, function(err, users) {
      user = users[0];
      if (err) { return next(err); }
      if (!user) {
        let user = new User({
          facebook_id: facebook_id,
          email: email,
          name: name
        });
        user.save(function(err) {
          if (err) { return next(err); }
          res.json({token: tokenForUser(user)});
        });
      } else {
        res.json({token: tokenForUser(user)});
      }
    });
  }).catch(function(error) {
    return next(error);
  });
};
