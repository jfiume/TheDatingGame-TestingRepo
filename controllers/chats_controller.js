exports.create = function(req, res, next) {
  let user = req.user;
  let userId = user.idea;
  let userIds = [];
  userIds.push(userId);


  user.save(function(err) {
    if (err) { return next(err); }
    res.json(messages, userIds, playedGames);
  });
};

exports.index = function(req, res, next) {
  res.json(req.user.chats);
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
