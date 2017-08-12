const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const request = require('request');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/socket_chat.html');
});


let users = 1;
io.on('connection', function(socket){
  users++;
  let user = {"user": users};
  socket.on('chat message', function(msg){
    let message = {authorId: users, messageOriginationTime: Date.now(), messageContent: msg};
    io.emit('chat message', msg);
    request({
      method: 'POST',
      url: 'http://localhost:3000/v1/message',
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
