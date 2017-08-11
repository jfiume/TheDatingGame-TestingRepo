import React from 'react';
import { TabNavigator } from 'react-navigation';

import Instructions from '../components/intro/Instructions';
import ProspectDetail from '../components/prospect/ProspectDetail';

export const Tabs = TabNavigator({
  Instructions: {
    screen: Instructions,
  },
  ProspectDetail: {
    screen: ProspectDetail,
  }
});
