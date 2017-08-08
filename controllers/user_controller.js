const user = require('../app/models/user');

exports.update = function(req, res) {
  user.email = req.email.text;
  user.name = req.name.text;
};

exports.show = function(req, res, next) {
  res.json(req.user);
};

exports.index = function(req, res, next) {
  res.json(req.users);
};
