const UserController = require('../controllers/user_controller');

module.exports = (app) => {
  app.get('/api/user', UserController.findUser);

  app.post('/api/user/id', UserController.updateUser);
};
