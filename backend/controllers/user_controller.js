const User = require('../models/user');

module.exports = {
  findUser(_id) {
    return User.findById(_id);
  },

  updateUser(req, res, next) {
    const userProps = req.body;
    User.update(userProps)
      .then(user => res.send(user))
      .catch(next);
    // return User.update({ _id }, userProps);
  },


  deleteUser(_id) {
    User.remove({ _id });
  }

};
