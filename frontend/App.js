import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Login from './components/login.js';
import { Header } from './components/common';

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
    return user
    ?
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="The Dating Game" />
          <Text>
            welcome {user.name}!
          </Text>
      </View>
      </Provider>
      : <Login onLoggedIn={this.onLoggedIn} />
    );
  };
}
