const User = require('../models/chats');
const Messages = require('../models/messages');
const TextGames = require('../models/text_games');
const Chat = require('../models/chats');


exports.createChat = function(req, res, next) {
  let chat = new Chat(req.body);
  chat.save(function(err) {
    if (err) { return next(err); }
  }).then((chat) => res.json(chat));
};

exports.allChats = function(req, res, next) {
  Chat.find({}, function(err, chats) {
    res.json(chats.reduce(function(chatMap, item) {
            chatMap[item.id] = item;
            return chatMap;
        }, {}));
  });
};

exports.showChat = function(req, res, next) {
  let {id} = req.params;
  Chat.findOne({_id: id}, function(err, chat) {
    res.json(chat);
  });
};

exports.destroyChat = function(req, res, next) {
  console.log("i am running");
  let {id} = req.params;
  Chat.findByIdAndRemove({_id: id}).then(res.send("deleted"));
};
