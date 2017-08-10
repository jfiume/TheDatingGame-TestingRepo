import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from './components/login.js';

export default class App extends Component {
  state = {
    user: undefined, // not logged in yet
  };

// Gets called after user logs in with Facebook or Google
  onLoggedIn = (user) => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return user ?

          <Text>
            welcome {user.name}!
          </Text>

      : <Login onLoggedIn={this.onLoggedIn} />

  };
}
