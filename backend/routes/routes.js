const UserController = require('../controllers/user_controller');
const messageController = require('../controllers/message_controller');

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

  app.get('/messages', messageController.index);
  app.get('/messages/:id', messageController.show);
  app.delete('/message/:id', messageController.destroy);
  app.post('/message', messageController.create);
};
