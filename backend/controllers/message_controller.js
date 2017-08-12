const Message = require('../models/message');

module.exports = {
  create(req, res, next) {
    let message = new Message(req.body);
    message.save(function(err) {
      if (err) { return next(err); }
    }).then((message) => res.json(message));
  },

  index(req, res, next) {
    Message.find({}, function(err, messages) {
      res.json(messages.reduce(function(messageMap, item) {
              messageMap[item.id] = item;
              return messageMap;
          }, {}));
    });
  },

  show(req, res, next) {
    let {id} = req.params;
    Message.findOne({_id: id}, function(err, message) {
      res.json(message);
    });
  },

  destroy(req, res, next) {
    let {id} = req.params;
    Message.findByIdAndRemove({_id: id}).then(res.send("deleted"));
  },
};
