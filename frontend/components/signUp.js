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
      <View style={styles.container}>
        <TouchableOpacity onPress={this._facebookLogin}>
          <Text style={styles.welcome}>
            Facebook Login!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
