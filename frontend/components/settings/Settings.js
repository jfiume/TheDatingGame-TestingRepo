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
        <View style={styles.internalcont}>
          <Text>Your age:</Text>
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
          <Text>Prospect age min:</Text>
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
          <Text>Prospect age max:</Text>
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
          <Text>Your location:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textCont}
              placeholder="City Name (e.g. San Francisco)"
              onChangeText={(location) => this.setState({location})}
              value={this.state.location}
              />
          </View>
        </View>

        <View style={styles.internalcont}>
          <Text>Your occupation:</Text>
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
          <Text>Your Education:</Text>
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
          <Text>About you:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textCont}
              placeholder="I love long walks on the beach"
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
    justifyContent: 'space-between',
    padding: 10,
  },
  inputContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "gray"
  },
  textCont: {
    // height: 26
  }
});
