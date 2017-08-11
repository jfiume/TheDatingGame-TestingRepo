// Boiler plate for ChatIndex
// This component will need to fetchAllChats(currentUserId)
// map over all the chats to populate the screen with each ChatDetail

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ChatDetail from './components/chat/ChatDetail';

export default class ChatIndex extends Component {
  constructor(props) {
    super(props);
  }

  renderChats () {
      let { chats } = this.props;
      chats = chats.filter( chat => chat.user_id === this.props.currentUserId);
      return chats.map ( chat => (
        <ChatDetail key={chat.id} chat={chat}/>
      ));
    }

  render() {
    const user = this.props.currentUser.id || "";
    return (
      <View style={styles.container}>
        <View key={this.props.currentUser.id}>
          {this.renderChats()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
