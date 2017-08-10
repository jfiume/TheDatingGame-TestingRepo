import React, { Component, PropTypes } from 'react';
import {
  Linking,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import SafariView from 'react-native-safari-view';

export default class Login extends Component {

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
      <View style={styles.container}>

        <View style={styles.content}>
          <Text style={styles.header}>
            Welcome Stranger!
          </Text>
          <View style={styles.avatar}>
            <TouchableOpacity name="user-circle" size={100} color="rgba(0,0,0,.09)" />
          </View>
          <Text style={styles.text}>
            Please log in to continue {'\n'}
            to the awesomness
          </Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={this.loginWithFacebook}
            {...iconStyles}
          >
            Login with Facebook
          </TouchableOpacity.Button>
        </View>

      </View>
    );
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
  },
});
