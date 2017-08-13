const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const request = require('request');
const user = require('./models/user');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/socket_chat.html');
});


let chatId = "598cadb099ee96414fba8bc8";
let userId = 1;

io.on('connection', function(socket){
  // console.log(io);
  let handshake = socket.handshake.query;
  handshake.query = { chatId: chatId };
  console.log(handshake);
  let room = `room ${handshake}`;
  console.log(room);
  socket.join(room, function(msg, error) {
    let message = {
      authorId: userId,
      messageOriginationTime: Date.now(),
      messageContent: msg
    };
    error => {}
    io.emit('chat message', msg);
    request({
      method: 'POST',
      url: 'localhost:3000/v1/message',
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
