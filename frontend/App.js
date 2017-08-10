import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SignUp from './components/intro/SignUp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

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
    return ( user ?
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <Text> welcome {user.name}</Text>
         </View>
       </Provider>

      : <SignUp onLoggedIn={this.onLoggedIn} />
    );
  };
}
