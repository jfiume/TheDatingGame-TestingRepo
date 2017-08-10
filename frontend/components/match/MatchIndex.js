//Bolier plate for MatchIndex

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// import ChatIndex from '../chat/ChatIndex';
// import GameIndex from '../game/GameIndex';

export default class MatchIndex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to React Native!
        </Text>
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
