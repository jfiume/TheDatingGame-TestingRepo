import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image
} from 'react-native';

export default class SignUp extends Component {
  _handleURL(event) {
    console.log(event.url);
    // Bit of a hack to get the token from this URL...
    // implement yours in a safer way
    console.log(event.url.split('#')[1].split('=')[1].split('&')[0]);
  }
  _facebookLogin() { // CHRIS gonna make changes to GET user info request
    Linking.openURL([
      'https://graph.facebook.com/oauth/authorize',
      '?response_type=token',
      '&client_id='+'281198615620596',
      '&redirect_uri=fb281198615620596://authorize',
      '$scope=email' // Specify permissions
    ].join(''));
  }
  componentDidMount() {
    Linking.addEventListener('url', this._handleURL);
  }
  render() {
    return (
      <Image
        source={require('../assets/splash4.jpg')}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            the Dating Game
          </Text>
        </View>
        <View>
          <View style={styles.signin}>
            <TouchableOpacity onPress={this._facebookLogin}>
              <Text style={styles.signinText}>
                Sign in with Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't worry! We never post to Facebook.
            </Text>
          </View>
        </View>
      </Image>
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
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'blue',
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
    fontWeight: 'bold',
    fontFamily: 'Noteworthy'
  },
  signin: {
    alignSelf: 'center',
    borderRadius: 90,
    borderWidth: 3,
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
    fontWeight: 'bold'
  },
});
