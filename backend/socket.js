const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const request = require('request');
const user = require('./models/user');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/socket.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    let message = {
      user: user,
      messageOriginationTime: Date.now(),
      messageContent: msg
    };
    io.emit('chat message', msg);
    request({
      method: 'POST',
      url: location.origin + '/message',
      json: true,
      headers: {
          "Content-Type": "application/json",
      },
      body: message
    }), function(error, response, body) {
      return error;
    };
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
