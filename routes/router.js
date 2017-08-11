const passport = require('passport');
const AuthenticationController = require('../controllers/auth_controller');
const UserController = require('../controllers/user_controller');
const ChatsController = require('../controllers/chats_controller');
const MessagesController = require('../controllers/messages_controller');
const passportService = require('./passport');


let requireAuth = passport.authenticate('jwt', {session: false});
let requireLogin = passport.authenticate('local', {session: false});
let router = require('express').Router();


// Auth Routes
// -----------------------------------------------------------------------------
// router.route('/signup')
//   .post(AuthenticationController.signup);
// router.route('/signin')
//   .post([requireLogin, AuthenticationController.signin]);

// User Routes
// -----------------------------------------------------------------------------
router.route('/show')
  .get([requireAuth, UserController.show]);
router.route('/index')
  .get([requireAuth, UserController.index]);

// Chat Routes
// -----------------------------------------------------------------------------
router.route('/chats')
  .get(ChatsController.index);

router.route('/chat')
  .post(ChatsController.create);

router.route('/chats/:id')
  .get(ChatsController.show)
  .delete(ChatsController.destroy);

// Message Routes
// -----------------------------------------------------------------------------
  router.route('/messages')
    .get(MessagesController.index);

  router.route('/message')
    .post(MessagesController.create);

  router.route('/messages/:id')
    .get(MessagesController.show)
    .delete(MessagesController.destroy);


// -----------------------------------------------------------------------------
module.exports = router;
