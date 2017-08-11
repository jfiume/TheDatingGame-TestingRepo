const User = require('../models/user');

module.exports = (_id) => {
  return User.findById(_id);
};
