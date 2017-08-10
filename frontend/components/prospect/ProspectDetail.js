import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ImageBackground
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class ProspectDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }

  onSwipe(gestureName, gestureState) {
   const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
   this.setState({gestureName: gestureName});
   switch (gestureName) {
     case SWIPE_LEFT:
       this.setState({backgroundColor: 'blue'});
       break;
     case SWIPE_RIGHT:
       this.setState({backgroundColor: 'yellow'});
       break;
   }
 }

  componentDidMount() {
    //at this point we need to query the databasy for all the potential
    // matches for this user
    // this.props.fetchProspectMatch();
  }

  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
  }

  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
  }

  render() {
    const config = {
     velocityThreshold: 0.3,
     directionalOffsetThreshold: 80
   };

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbar_icons}>
            <TouchableOpacity >
              <Image
                style={styles.icon}
                source={require('../../../assets/images/setting.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.navbarText}>
            theDatingGame
          </Text>
          <View style={styles.navbar_icons}>
            <TouchableOpacity >
              <Image
                style={styles.icon}
                source={require('../../../assets/images/matches.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <GestureRecognizer
           onSwipe={(direction, state) => this.onSwipe(direction, state)}
           onSwipeLeft={(state) => this.onSwipeLeft(state)}
           onSwipeRight={(state) => this.onSwipeRight(state)}
           config={config}
           style={{
             flex: 1,
             backgroundColor: this.state.backgroundColor
           }}
           >
          <ImageBackground
            source={require("../../../assets/images/girl.jpg")}
            style={styles.image}>
            <View style={styles.imageText}>
              <View style={styles.firstLine}>
                <Text style={styles.name}>
                  Grace,
                </Text>
                <Text style={styles.age}>
                  24
                </Text>
              </View>

              <View style={styles.secondLine}>
                <View style={styles.secondLineContainer}>
                    <Text style={styles.occupation}>
                      Teacher
                    </Text>
                  </View>
                <View style={styles.theRest}>
                  <Text style={styles.school}>
                    Middleburry College,
                  </Text>
                  <Text style={styles.graduationDate}>
                    2015
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <Text>{this.state.myText}</Text>
          <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
        </GestureRecognizer>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15,
    alignItems: 'center'
  },

  navbar_icons: {
    margin: 2
  },

  icon: {
    height:25,
    width:25,
    tintColor: '#7e7e7e'
  },
  navbarText: {
    fontSize: 29,
    textAlign: 'center',
    color: 'rgb(252, 192, 27)',
    fontFamily: 'AvenirNext-Medium',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 7
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    padding:15
  },
  imageText: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth:5,
    borderColor: 'white',
    padding: 5,
  },
  firstLine: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 25,
    color: '#363636',
    fontFamily: 'AvenirNext-Medium',
    fontWeight: 'bold'
  },
  age: {
    marginLeft: 7,
    fontSize: 25,
    color: '#363636',
    fontFamily: 'AvenirNext-Regular'
  },
  theRest: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  occupation: {
    fontSize: 13,
    color: '#363636',
    fontFamily: 'AvenirNext-Regular'
  },
  school: {
    fontSize: 14,
    color: '#363636',
    fontFamily: 'AvenirNext-Medium'
  },
  graduationDate: {
    marginLeft: 5,
    fontSize: 14,
    color: '#363636',
    fontFamily: 'AvenirNext-Regular'
  }
});
