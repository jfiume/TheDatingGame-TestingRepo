const User = require('../models/messages');
const Message = require('../models/messages');
const TextGames = require('../models/text_games');
const Chat = require('../models/chats');


exports.createMessage = function(req, res, next) {
  let message = new Message(req.body);
  message.save(function(err) {
    if (err) { return next(err); }
  }).then((message) => res.json(message));
};

exports.allMessages = function(req, res, next) {
  Message.find({}, function(err, messages) {
    res.json(messages.reduce(function(messageMap, item) {
            messageMap[item.id] = item;
            return messageMap;
        }, {}));
  });
};

exports.showMessage = function(req, res, next) {
  let {id} = req.params;
  Message.findOne({_id: id}, function(err, message) {
    res.json(message);
  });
};

exports.destroyMessage = function(req, res, next) {
  console.log("i am running");
  let {id} = req.params;
  Message.findByIdAndRemove({_id: id}).then(res.send("deleted"));
};
