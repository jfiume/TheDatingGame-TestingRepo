// Bolier plate for MatchIndex
// This component will need to fetchAllMatches(currentUserId)
// Local state will update onPress, toggling between ChatIndex and GameIndex

import React, { Component } from 'react';
import {connect} from 'react-redux';
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

class MatchIndex extends Component {
  constructor (props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>
          {this.props.text}
        </Text>
        <TouchableOpacity>
          <Text>
            Change text
          </Text>
        </TouchableOpacity>
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

const mapStateToProps = state => {
  return {
    text: state.text
  };
};

export default connect(mapStateToProps)(MatchIndex);
