const UserController = require('../controllers/user_controller');
const MessageController = require('../controllers/message_controller');
import {
  facebookLogin,
  facebookMiddleware,
  oauthCallback,
} from '../controllers/auth_controller';

module.exports = (app) => {
  app.get('/auth/facebook', facebookLogin);
  app.get('/auth/facebook/callback', facebookMiddleware, oauthCallback);

  app.get('/auth/user/:id', UserController.find);
  app.put('/auth/user/:id', UserController.edit);
  app.delete('/auth/user/:id', UserController.delete);

  app.post('/message', MessageController.create);
  app.get('/messages', MessageController.index);
  app.get('/messages/:id', MessageController.show);
  app.delete('/messages/:id', MessageController.destroy);
};
