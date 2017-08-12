const User = require('../models/chats');
const Messages = require('../models/messages');
const TextGames = require('../models/text_games');
const Chat = require('../models/chats');
const chat = require('../socket.js');

module.exports = {
  create(req, res, next) {
    let chat = new Chat(req.body);
    chat.save(function(err) {
      if (err) { return next(err); }
    }).then((chat) => res.json(chat));
  },

  index(req, res, next) {
    Chat.find({}, function(err, chats) {
      res.json(chats.reduce(function(chatMap, item) {
              chatMap[item.id] = item;
              return chatMap;
          }, {}));
    });
  },

  show(req, res, next) {
    let {id} = req.params;
    Chat.findOne({_id: id}, function(err, chat) {
      res.json(chat);
    });
  },

  destroy(req, res, next) {
    let {id} = req.params;
    Chat.findByIdAndRemove({_id: id}).then(res.send("deleted"));
  },
};
