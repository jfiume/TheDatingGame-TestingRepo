import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ImageBackground
} from 'react-native';

export default class Instructions extends Component {

  componentDidMount() {
    //at this point we need to query the databasy for all the potential
    // matches for this user
    // this.props.fetchProspectMatch();
  }
  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/splash5.jpg")}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            TDG
          </Text>
          <Text style={styles.secondHeaderText}>
            lets have fun
          </Text>
        </View>
        <View>
          <View style={styles.instrctions}>
            <Text style={styles.instrctionsText}>
              Two people like each other and its a match...
            </Text>
          </View>
            <Text style={styles.instrctionsText}>
              They start playing the game
            </Text>
            <Text style={styles.instrctionsText}>
              ...and they start chatting,
            </Text>
            <Text style={styles.instrctionsText}>
              then shit gets real!
            </Text>
        </View>
        <View style={styles.signin}>
        <TouchableOpacity >
          <Text style={styles.signinText}>
            X
          </Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: undefined,
    height: undefined,
    justifyContent: 'space-between',
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: 'blue',
  },
  header: {
    marginTop: 100,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerText: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'AvenirNext-Medium',
    // fontWeight: 'bold',
    // fontStyle: 'italic'
  },
  signin: {
    alignSelf: 'center',
    borderRadius: 90,
    borderWidth: 2.5,
    borderColor: 'white',
    backgroundColor: 'transparent'
  },
  signinText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    fontFamily: 'AvenirNext-Medium',
  }
  instructions: {
    alignSelf: 'center',
    borderRadius: 90,
    borderWidth: 2.5,
    borderColor: 'white',
    backgroundColor: 'transparent'
  },
  instructionsText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    fontFamily: 'AvenirNext-Medium',
  }
});
