import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Instructions from '../components/intro/Instructions';
import ProspectDetail from '../components/prospect/ProspectDetail';
import MatchIndex from '../components/match/matchIndex';
import Settings from '../components/settings/Settings';

export const Tabs = TabNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" size={28} color={tintColor}/>
    }
  },
  Instructions: {
    screen: Instructions,
    navigationOptions: {
      tabBarLabel: 'Instructions',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={28} color={tintColor}/>
    },
  },
  Prospects: {
    screen: ProspectDetail,
    navigationOptions: {
      tabBarLabel: 'Prospects',
      tabBarIcon: ({ tintColor }) => <Icon name="sentiment-very-satisfied" size={28} color={tintColor}/>
    },
  },
  Matches: {
    screen: MatchIndex,
    navigationOptions: {
      tabBarLabel: 'Matches',
      tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={28} color={tintColor}/>
    },
  }
});
