const User = require('../models/user');

module.exports = {
  findUser(_id) {
    return User.findById(_id);
  },

  updateUser(_id, res) {
    const userProps = req.body;
    User.update(userProps)
      .then(user => res.send(user));
    // return User.update({ _id }, userProps);
  },


  deleteUser(_id) {
    User.remove({ _id });
  }

};
