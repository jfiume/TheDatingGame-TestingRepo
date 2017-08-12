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
    debugger
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
        <TextInput
          type="text"
          style={styles.container}
          value={this.state.age}
          placeholder="E.g. 25"
          onChangeText={(age) => this.setState({age})}
          />
        <Text>Prospect age min:</Text>
        <TextInput
          style={styles.container}
          placeholder="18"
          onChangeText={(age_range_low) => this.setState({age_range_low})}
          value={this.state.age_range_low}
          />
          <Text>Prospect age max:</Text>
        <TextInput
          style={styles.container}
          placeholder="30"
          onChangeText={(age_range_high) => this.setState({age_range_high})}
          value={this.state.age_range_high}
          />
        <Text>Your location:</Text>
        <TextInput
          style={styles.container}
          placeholder="City Name (e.g. San Francisco)"
          onChangeText={(location) => this.setState({location})}
          value={this.state.location}
          />
        <Text>Your occupation:</Text>
        <TextInput
          style={styles.container}
          placeholder="Doctor"
          onChangeText={(occupation) => this.setState({occupation})}
          value={this.state.occupation}
          />
        <Text>Your Education:</Text>
        <TextInput
          style={styles.container}
          placeholder="State University"
          onChangeText={(education) => this.setState({education})}
          value={this.state.education}
          />
        <Text>About you:</Text>
        <TextInput
          style={styles.container}
          placeholder="I love long walks on the beach"
          onChangeText={(about) => this.setState({about})}
          value={this.state.about}
          />
        <Text>Interested In:</Text>
        <TextInput
          style={styles.container}
          placeholder="Men, Women, or both"
          onChangeText={(interested_in) => this.setState({interested_in})}
          value={this.state.about}
          />
        <TouchableOpacity onPress={this.handleSubmit}>
            <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    paddingLeft: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
});
