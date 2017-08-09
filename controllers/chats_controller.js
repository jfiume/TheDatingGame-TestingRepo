const User = require('../models/chats');
const Messages = require('../models/messages');
const TextGames = require('../models/text_games');
const Chat = require('../models/chats');

exports.create = function(req, res, next) {
  let chat = new Chat({
    messages: Messages,
    user_ids: User.id,
    played_games: TextGames
  });
  chat.save(function(err) {
    if (err) { return next(err); }
    res.json(chat.messages);
  });
};

exports.index = function(req, res, next) {
  res.json(req.chat);
};

exports.show = function(req, res, next) {
  res.json(req.chat.id);
};

exports.destroy = function(req, res, next) {
  const user = req.user;
  const chatId = req.params.chatId;
  user.chats = user.chats.filter((chat) => {
    if (chatId === chat.id) {
      return false;
    }
    return true;
  });
  user.save(function(err) {
    if (err) { return next(err); }
    res.json({});
  });
};
