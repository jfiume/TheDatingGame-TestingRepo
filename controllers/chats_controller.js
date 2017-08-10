const User = require('../models/chats');
const Messages = require('../models/messages');
const TextGames = require('../models/text_games');
const Chat = require('../models/chats');

exports.createChat = function(req, res, next) {
  console.log("i am running");
  console.log(req.body);
  let chat = new Chat({
    messages: req.body.messages,
    user_ids: req.body.userId,
    played_games: req.body.textGames
  });
  chat.save(function(err) {
    if (err) { return next(err); }
  }).then(() => Chat.findOne(chat));
};

exports.allChats = function(req, res, next) {
  console.log("i am running");
  Chat.find({}, function(err, chats) {
    res.json(chats.reduce(function(chatMap, item) {
            chatMap[item.id] = item;
            return chatMap;
        }, {}));
  });
};

exports.showChat = function(req, res, next) {
  console.log("i am running");
  let {id} = req.params;
  console.log(id);
  Chat.findOne({_id: id}, function(err, chat) {
    console.log(chat);
  });
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
