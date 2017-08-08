const passport = require('passport');

const AuthenticationController = require('../controllers/auth_controller');
const UserController = require('../controllers/user_controller');
const ChatController = require('../controllers/chats_controller');
const passportService = require('./passport');

let requireAuth = passport.authenticate('jwt', {session: false});
let requireLogin = passport.authenticate('local', {session: false});
let router = require('express').Router();


// Auth Routes
// -----------------------------------------------------------------------------
router.route('/signup')
  .post(AuthenticationController.signup);
router.route('/signin')
  .post([requireLogin, AuthenticationController.signin]);


// User Routes
// -----------------------------------------------------------------------------
router.route('/update')
  .patch(requireAuth, UserController.update);
router.route('/show')
  .get([requireAuth, UserController.show]);
router.route('/index')
  .get([requireAuth, UserController.index]);

// Testing Postman
router.route('/new')
  .post(UserController.create);


// Chat Routes
// -----------------------------------------------------------------------------
router.route('/users/:user_id/chats')
  .post(requireAuth, ChatController.create)
  .get(requireAuth, ChatController.index);

router.route('/users/:user_id/chats/:chat_id')
  .delete(requireAuth, ChatController.destroy);

module.exports = router;
