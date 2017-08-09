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

        <View style={styles.instructions}>
          <View style={styles.instructionsline}>
            <Text style={styles.instructionsNumber}>
              1
            </Text>
            <Text style={styles.instructionsText}>
              Two people like each other & its a match...
            </Text>
          </View>
          <View style={styles.instructionsline}>
            <Text style={styles.instructionsNumber}>
              2
            </Text>
            <Text style={styles.instructionsText}>
              They start playing the game,
            </Text>
          </View>
          <View style={styles.instructionsline}>
            <Text style={styles.instructionsNumber}>
              3
            </Text>
            <Text style={styles.instructionsText}>
              they start chatting,
            </Text>
          </View>
          <View style={styles.instructionsline}>
            <View style={styles.instructionsNumberContainer}>
              <Text style={styles.instructionsNumber}>
                4
              </Text>
            </View>
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
    backgroundColor: 'transparent',
    marginTop: -70
  },
  instructionsText: {
    fontSize: 16,
    // textAlign: 'center',
    color: 'white',
    flexWrap: 'wrap',
    width: 300,
    // fontWeight: 'bold',
    fontFamily: 'AvenirNext-Medium',
  },
  instructionsline: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 15,
    marginLeft:10
  },
  instructionsNumberContainer: {
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // textAlign: 'center',

  },
  instructionsNumber: {
    fontSize: 15,
    textAlign: 'center',
    color: '#f0f066',
    // borderRadius: 7,
    // borderWidth: 1.5,
    // borderColor: 'white',
    // fontWeight: 'bold',
    fontFamily: 'AvenirNext-Medium',
    // paddingTop: 10,
    // paddingBottom: 3,
    // paddingRight: 6,
    // paddingLeft: 6,
    // marginTop: 3,
    marginRight: 15,
    // width: 23,
    // height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // alignSelf: 'center',
  },
  next: {
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  nextButton: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    // paddingTop: 5,
    // paddingBottom: 30,
    marginBottom:4,
    // marginTop:4,
    marginRight:2,
    marginLeft:2,
    // paddingRight: 10,
    // paddingLeft: 10,
    // fontWeight: 'bold',
    width: 40,
    height: 40,
    borderRadius: 50,
    fontFamily: 'AvenirNext-Medium',
  }
});
