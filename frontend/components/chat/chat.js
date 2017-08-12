import React from 'react';
import SocketIOClient from 'socket.io-client';
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

class Main extends React.Component {
  constructor(props) {
    super(props);

    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient('http://localhost:3000');
  }
// still in progress with the frontend chat features
  addChat() {
    let socket = io();
    // $(function () {
    //   var socket = io();
    //   $('form').submit(function(){
    //     socket.emit('chat message', $('#m').val());
    //     $('#m').val('');
    //     return false;
    //   });
    // socket.on('chat message', function(msg){
    //   $('#messages').append($('<li>').text(msg));
    //   window.scrollTo(0, document.body.scrollHeight);
    // });
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableHighlight
            underlayColor={'#4e4273'}
            onPress={this.onBackPress}
            style={{marginLeft: 15}}
            >
            <Text style={{color: '#fff'}}>&lt; Back</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.chatContainer}>
          <Text style={{color: '#000'}}>Chat</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    background: '#fffff'
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#6E5BAA',
    paddingTop: 20,
  },
  chatContainer: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

module.exports = Main;
// <div>
//   <ul id="messages">
//
//   </ul>
//   <form action="" onSubmit={this.addChat}>
//     <input id="m" autocomplete="off" /><button>Send</button>
//   </form>
// </div>
