const User = require('../models/user');

// exports.update = function(req, res, next) {
//   user.email = req.body.email;
//   user.name = req.body.name;
//   user.save(function(err) {
//     if (err) { return next(err); }
//   });
// };

exports.show = function(req, res, next) {
  res.json(req.user);
};

exports.index = function(req, res, next) {
  res.json(req.users);
};

// Testing Postman

exports.create = function(req, res, next) {
  console.log("i am running");
  console.log(req.body);
  let user = new User({
    facebook_id: req.body.facebook_id,
    email: req.body.email,
    name: req.body.name
  });
  console.log(user);
  user.save(function(err) {
    if (err) { return next(err); }
    // res.send({user_id: user._id});
  }).then(() => User.findOne({user}));
  // user.save().then(() => User.findOne({ema}))
};

exports.test = function (req, res, next){
  console.log(req.query);
  res.json(req.query.test);
};
