const UserController = require('../controllers/user_controller');

module.exports = (app) => {
  app.get('/auth/user', UserController.findUser);

  app.post('/auth/user/id', UserController.updateUser);
};
