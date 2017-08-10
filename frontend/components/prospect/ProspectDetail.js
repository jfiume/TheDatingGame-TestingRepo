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

export default class ProspectDetails extends Component {

  componentDidMount() {
    //at this point we need to query the databasy for all the potential
    // matches for this user
    // this.props.fetchProspectMatch();
  }
  render() {
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
