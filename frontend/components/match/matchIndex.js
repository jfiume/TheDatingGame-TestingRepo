// Bolier plate for MatchIndex
// This component will need to fetchAllMatches(currentUserId)
// Local state will update onPress, toggling between ChatIndex and GameIndex

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


// import ChatIndex from '../chat/ChatIndex';
// import GameIndex from '../game/GameIndex';

export default class MatchIndex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbar_icons}>
            <TouchableOpacity >
              <Image
                style={styles.icon}
                source={require('../../../assets/images/back.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15,
    alignItems: 'center'
  },

  navbar_icons: {
    margin: 2
  },

  icon: {
    height:25,
    width:25,
    tintColor: '#7e7e7e'
  },
});
