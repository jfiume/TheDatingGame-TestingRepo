const UserController = require('../controllers/user_controller');
import {
  facebookLogin,
  facebookMiddleware,
  oauthCallback,
} from '../controllers/auth_controller';

module.exports = (app) => {
  app.get('/auth/facebook', facebookLogin);
  app.get('/auth/facebook/callback', facebookMiddleware, oauthCallback);

  app.get('/auth/user', UserController.find);
  app.put('/auth/user/:id', UserController.edit);
};
