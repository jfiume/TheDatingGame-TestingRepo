// Bolier plate for MatchIndex
// This component will need to fetchAllMatches(currentUserId)
// Local state will update onPress, toggling between ChatIndex and GameIndex

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ImageBackground
} from 'react-native';
import MatchDetail from './matchDetail';
import {matches} from '../../reducers/ProspectList';



export default class MatchIndex extends Component {
  constructor(props) {
    super(props);
    this.renderMatches = this.renderMatches.bind(this);
  }

  renderMatches () {
      // let { matches } = this.props.currentUser;

      // matches = matches.filter( match => match.user_id === this.props.currentUserId);

      return matches.map ( match => (
        <MatchDetail key={match.id} match={match}/>
      ));
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>

          <Text style={styles.navbarText}>
            theDatingGame
          </Text>

        </View>
        <View style={styles.topbar}>
          <Text style={styles.topbarText}>
            Conversations
          </Text>
          <Text style={styles.topbarText2}>
            (Recent)
          </Text>
        </View>
        <View style={styles.images}>
          {this.renderMatches()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    padding: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:15,
    alignItems: 'center'
  },
  navbarText: {
    fontSize: 29,
    textAlign: 'center',
    color: 'rgb(252, 192, 27)',
    fontFamily: 'AvenirNext-Medium',
  },
  topbar: {
    flexDirection: 'row',
    // justifyContent: 'center',
    marginTop:15,
    alignItems: 'center'
  },
  topbarText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#121212',
    fontFamily: 'AvenirNext-Regular',
    marginLeft: 8
  },
  topbarText2: {
    fontSize: 15,
    textAlign: 'center',
    color: '#868686',
    fontFamily: 'AvenirNext-Regular',
    marginLeft:5
  },
  images: {
    flex: 1,
    marginLeft:10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});
