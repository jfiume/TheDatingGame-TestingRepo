const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const chat = require('./socket.js');

// const server = http.createServer(function(req, res){
//
// 	// Send HTML headers and message
// 	// res.writeHead(200,{ 'Content-Type': 'text/html' });
// 	// res.end('<h1>Hello Socket Lover!</h1>');
// });
// server.listen(3000);
// const socket = io.listen(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./routes/router');

mongoose.connect('mongodb://localhost:3000/TheDatingGame');

app.use(morgan('combined'));
app.use('/v1', router);

// socket chat
app.get('/', function(req, res){
  res.sendFile(__dirname + '/socket_chat.html');
});

//
// let users = 1;
// io.on('connection', function(socket){
//   users++;
//   let user = {"user": users};
//   console.log(user);
//   socket.on('chat message', function(msg){
//     let message = {authorId: users, messageOriginationTime: Date.now(), messageContent: msg};
//     console.log(message);
//     io.emit('chat message', msg);
//     var chatString = JSON.stringify(message);
//     console.log(chatString);
//     return chatString;
//   });
// });


// http.listen(port, function(){
//   console.log('listening on *:' + port);
// });
// end socket chat

app.listen(3000, '127.0.0.1', function(err) {
  if (err) { return console.log(err); }
  console.log("Listening on port 3000.");
});
