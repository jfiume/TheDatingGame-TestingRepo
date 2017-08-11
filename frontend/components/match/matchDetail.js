// Boiler plate for ChatIndex
// This component will need to fetchAllChats(currentUserId)
// map over all the chats to populate the screen with each ChatDetail

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class MatchDetail extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View>
        <View>
          <Image
            style={styles.icon}
            source={require('../../../assets/images/girl.jpg')}
          />
        </View>
        <View>
          <Text style={styles.name}>
            Grace
          </Text>
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
