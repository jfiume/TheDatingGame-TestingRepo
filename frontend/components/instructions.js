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
        source={require("../../assets/images/splash.jpg")}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            the Dating Game
          </Text>
          <Text style={styles.secondHeaderText}>
            "let's have fun"
          </Text>
        </View>
        <View>
          <View style={styles.instrctions}>
            <Text style={styles.instrction_text}>
              Dont worry! We never post to Facebook.
            </Text>
          </View>
        </View>
        <View style={styles.signin}>
        <TouchableOpacity onPress={this._facebookLogin}>
        <Text style={styles.signinText}>
        Sign in with Facebook
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
    marginTop: 70,
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
    borderRadius: 25,
    borderWidth: 2.5,
    borderColor: 'white',
    backgroundColor: 'transparent',
    width: 320
  },
  signinText: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: 'bold',
    fontFamily: 'AvenirNext-Medium',
  },
  footer: {
    marginTop: 65,
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingBottom: 35
  },
  footerText: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'AvenirNext-Medium',
  }
});
