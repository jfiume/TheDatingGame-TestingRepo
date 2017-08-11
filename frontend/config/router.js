import React from 'react';
import { TabNavigator } from 'react-navigation';

import Instructions from '../components/intro/Instructions';
import ProspectDetail from '../components/prospect/ProspectDetail';
import MatchIndex from '../components/match/matchIndex';

export const Tabs = TabNavigator({
  Instructions: {
    screen: Instructions,
  },
  Prospects: {
    screen: ProspectDetail,
  },
  Matches: {
    screen: MatchIndex,
  }
});
