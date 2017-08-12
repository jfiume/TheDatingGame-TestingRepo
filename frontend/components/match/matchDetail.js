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
        <View style={styles.imageConatiner}>
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
    height:55,
    width:55,
    borderColor: 'white',
    borderWidth:2,
    borderRadius: 20
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red'

  },
  name: {
    marginLeft: 20,
    fontSize: 15,
    color: '#363636',
    fontFamily: 'AvenirNext-Medium',
    // fontWeight: 'bold'
  }
});
