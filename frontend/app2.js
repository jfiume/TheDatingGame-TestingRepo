import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SignUp from './components/intro/SignUp';
import MatchIndex from './components/match/matchIndex';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default class App extends Component {

// Gets called after user logs in with Facebook or Google

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <MatchIndex />
         </View>
       </Provider>

    );
  }
}
