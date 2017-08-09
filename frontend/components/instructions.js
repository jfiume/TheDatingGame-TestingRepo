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
            theDatingGame,
          </Text>
          <Text style={styles.secondHeaderText}>
            lets have fun!
          </Text>
        </View>
        <View>
          <View style={styles.instructions}>
            <Text style={styles.instructionsText}>
              Two people like each other and its a match...
            </Text>
            <Text style={styles.instructionsText}>
              They start playing the game
            </Text>
            <Text style={styles.instructionsText}>
              ...and they start chatting,
            </Text>
            <Text style={styles.instructionsText}>
              then shit gets real!
            </Text>
          </View>
        </View>
        <View style={styles.next}>
        <TouchableOpacity >
          <Text style={styles.nextButton}>
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
    marginTop: 200,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'AvenirNext-Medium',
    // fontWeight: 'bold',
    // fontStyle: 'italic'
  },
  secondHeaderText: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'GillSans-Italic',
    fontWeight: 'bold'
  },
  instructions: {
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  instructionsText: {
    fontSize: 15,
    // textAlign: 'center',
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 15,
    // fontWeight: 'bold',
    fontFamily: 'AvenirNext-Medium',
  },
  next: {
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: 'white',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  nextButton: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    // fontWeight: 'bold',
    fontFamily: 'AvenirNext-Medium',
  }
});
