import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Platform
} from 'react-native';
import SafariView from 'react-native-safari-view';


export default class SignUp extends Component {

  static propTypes = {
    onLoggedIn: PropTypes.func.isRequired
  };

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    // Decode the user string and parse it into JSON
    const user = JSON.parse(decodeURI(user_string));
    // Call onLoggedIn function of parent component and pass user object
    this.props.onLoggedIn(user);
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  // Handle Login with Facebook button tap
  loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');

  // Open URL in a browser
  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    }
  };
  render() {
    return (
      <ImageBackground style={styles.container}
        source={require("../../../assets/images/splash2.jpg")}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            the Dating Game
          </Text>
        </View>
        <View>
          <View style={styles.signin}>
            <TouchableOpacity onPress={this.loginWithFacebook}>
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
