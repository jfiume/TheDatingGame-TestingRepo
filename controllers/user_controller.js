const user = require('../models/user');

exports.update = function(req, res, next) {
  user.email = req.body.email;
  user.name = req.body.name;
  user.save(function(err) {
    if (err) { return next(err); }
  });
};

exports.show = function(req, res, next) {
  res.json(req.user);
};

exports.index = function(req, res, next) {
  res.json(req.users);
};

// Testing Postman

exports.create = function(req, res) {
  let User = new User({
    facebook_id: req.body.facebook_id,
    email: req.body.email,
    name: req.body.name
  });
  User.save(
    res.json(User.name)
  );
};
