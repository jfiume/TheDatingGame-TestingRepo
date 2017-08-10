const passport = require('passport');
const AuthenticationController = require('../controllers/auth_controller');
const UserController = require('../controllers/user_controller');
const { create } = require('../controllers/user_controller');
const ChatController = require('../controllers/chats_controller');
const { allChats, showChat, createChat, destroyChat, socketChat } = require('../controllers/chats_controller');
const passportService = require('./passport');


let requireAuth = passport.authenticate('jwt', {session: false});
let requireLogin = passport.authenticate('local', {session: false});
let router = require('express').Router();



router.route('/test')
  .post(UserController.test);

// Auth Routes
// -----------------------------------------------------------------------------
// router.route('/signup')
//   .post(AuthenticationController.signup);
// router.route('/signin')
//   .post([requireLogin, AuthenticationController.signin]);


router.route('/signup')
  .post(create);

// User Routes
// -----------------------------------------------------------------------------
// router.route('/update')
//   .patch(requireAuth, UserController.update);
router.route('/show')
  .get([requireAuth, UserController.show]);
router.route('/index')
  .get([requireAuth, UserController.index]);

// Testing Postman
// router.route('/new')
//   .post(UserController.create);


// Chat Routes
// -----------------------------------------------------------------------------
router.route('/chats')
  .get(allChats);

router.route('/chat')
  .post(createChat);

router.route('/chats/:id')
  .get(showChat)
  .delete(destroyChat);

router.route('/')
  .get(socketChat);

module.exports = router;
