import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ImageBackground
} from 'react-native';


export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      age_range_low: '',
      age_range_high: '',
      location: '',
      occupation: '',
      education: '',
      about: '',
      interested_in: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // use local state to update the user in the db. Will need to take the current Users info for other fields
  handleSubmit() {
    return this.state;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // cahnge placeholder's with currentUser info
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
            Profile Settings
          </Text>
        </View>

        <View style={styles.internalcont}>
          <Text>My age:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              type="text"
              style={styles.textCont}
              value={this.state.age}
              placeholder="E.g. 25"
              onChangeText={(age) => this.setState({age})}
              />
          </View>
        </View>

        <View style={styles.internalcont}>
          <Text>Min age:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textCont}
              placeholder="18"
              onChangeText={(age_range_low) => this.setState({age_range_low})}
              value={this.state.age_range_low}
              />
          </View>
        </View>

        <View style={styles.internalcont}>
          <Text>Max age:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textCont}
              placeholder="30"
              onChangeText={(age_range_high) => this.setState({age_range_high})}
              value={this.state.age_range_high}
              />
          </View>
        </View>

        <View style={styles.internalcont}>
          <Text>City:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textCont}
              placeholder="San Francisco"
              onChangeText={(location) => this.setState({location})}
              value={this.state.location}
              />
          </View>
        </View>

        <View style={styles.internalcont}>
          <Text>Occupation:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textCont}
              placeholder="Doctor"
              onChangeText={(occupation) => this.setState({occupation})}
              value={this.state.occupation}
              />
          </View>
        </View>

        <View style={styles.internalcont}>
          <Text>Education:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textCont}
              placeholder="State University"
              onChangeText={(education) => this.setState({education})}
              value={this.state.education}
              />
          </View>
        </View>

        <View style={styles.internalcont}>
          <Text>About me:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textCont}
              placeholder="I love long walks on..."
              onChangeText={(about) => this.setState({about})}
              value={this.state.about}
              />
          </View>
        </View>

        <View style={styles.internalcont}>
          <Text>Interested In:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textCont}
              placeholder="Men, Women, or both"
              onChangeText={(interested_in) => this.setState({interested_in})}
              value={this.state.about}
              />
          </View>
        </View>

        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
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
    marginTop:5,
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    // borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 7
  },
  topbarText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#121212',
    fontFamily: 'AvenirNext-Regular',
    marginLeft: 8
  },
  inputContainer: {
    // padding: 5,
    paddingLeft: 10,
    marginLeft: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "gray"
  },
  internalcont: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textCont: {
    // height: 26
  }
});
