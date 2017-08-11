const User = require('../models/user');

module.exports = {
  find(_id) {
    return User.findById(_id);
  },

  edit(req, res, next) {
    const userId = req.params.id;
    const userProps = req.body;
    User.findByIdAndUpdate({ _id: userId }, userProps)
      .then(() => User.findById({ _id: userId }))
      .then(user => res.send(user))
      .catch(next);
    // return User.update({ _id }, userProps);
  },


  deleteUser(_id) {
    User.remove({ _id });
  }

};
