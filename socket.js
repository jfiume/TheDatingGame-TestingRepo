var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/socket_chat.html');
});

let users = 1;
io.on('connection', function(socket){
  users++;
  let user = {"user": users};
  console.log(user);
  socket.on('chat message', function(msg){
    let message = {user: {"message": msg}};
    console.log(message);
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
