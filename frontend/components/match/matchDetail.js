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
        <View style={styles.viewcont}>
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
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height:56,
    width:56,
    borderColor: 'white',
    borderWidth:2,
    borderRadius: 20
  },
  viewcont: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 59,
    height: 59,
    borderColor: '#121212',
    borderWidth: .5,
    borderRadius: 22,
    // backgroundColor: '#989898'

  },
  name: {
    marginLeft: 15,
    fontSize: 15,
    color: '#121212',
    fontFamily: 'AvenirNext-Medium',
    // fontWeight: 'bold'
  }
});
