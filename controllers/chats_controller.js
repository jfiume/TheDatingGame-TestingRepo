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
