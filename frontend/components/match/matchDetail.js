// Boiler plate for ChatIndex
// This component will need to fetchAllChats(currentUserId)
// map over all the chats to populate the screen with each ChatDetail

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ImageBackground
} from 'react-native';



export default class MatchDetail extends Component {
  constructor(props) {
    super(props);

  }




  render() {
    const firstName = this.props.match.name.split(" ")[0];
    const avatar = this.props.match.avatar;
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={{uri: avatar}}
          />
        </View>
        <View>
          <Text style={styles.name}>
            {firstName}
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
    // alignItems: 'center',
    // padding: 10,
    marginTop:25,
    
  },
  avatar: {
    height:60,
    width:60
  },
  name: {
    marginLeft: 7,
    fontSize: 20,
    color: '#363636',
    fontFamily: 'AvenirNext-Medium',
    // fontWeight: 'bold'
  }
});
