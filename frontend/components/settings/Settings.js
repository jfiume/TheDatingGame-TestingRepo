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
      <View>
        <Text>Your age:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            type="text"
            style={styles.container}
            value={this.state.age}
            placeholder="E.g. 25"
            onChangeText={(age) => this.setState({age})}
            />
        </View>

        <Text>Prospect age min:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.container}
            placeholder="18"
            onChangeText={(age_range_low) => this.setState({age_range_low})}
            value={this.state.age_range_low}
            />
        </View>

        <Text>Prospect age max:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.container}
            placeholder="30"
            onChangeText={(age_range_high) => this.setState({age_range_high})}
            value={this.state.age_range_high}
            />
        </View>

        <Text>Your location:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.container}
            placeholder="City Name (e.g. San Francisco)"
            onChangeText={(location) => this.setState({location})}
            value={this.state.location}
            />
        </View>

        <Text>Your occupation:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.container}
            placeholder="Doctor"
            onChangeText={(occupation) => this.setState({occupation})}
            value={this.state.occupation}
            />
        </View>

        <Text>Your Education:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.container}
            placeholder="State University"
            onChangeText={(education) => this.setState({education})}
            value={this.state.education}
            />
        </View>

        <Text>About you:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.container}
            placeholder="I love long walks on the beach"
            onChangeText={(about) => this.setState({about})}
            value={this.state.about}
            />
        </View>

        <Text>Interested In:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.container}
            placeholder="Men, Women, or both"
            onChangeText={(interested_in) => this.setState({interested_in})}
            value={this.state.about}
            />
        </View>

        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "gray"
  },
  container: {
    height: 26
  },
});
