import React, { Component } from "React";
import { AppRegistry, Image, Text, View, TextInput, StyleSheet, TouchableOpacity, StatusBar } from "react-native"


export default class LoginForm extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TextInput
        placeholder="Username or Email"
        placeholderTextColor="pink"
        returnKeyType="next"
        style={styles.input}
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        placeholder="Username or Email"
        placeholderTextColor="pink"
        secureTextEntry
        returnKeyType="done"
        style={styles.input}
        ref={(input) => this.passwordInput = input}
      />

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonLogin}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    )
  }
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  input: {
    height: 40,
    backgroundColor: 'red',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonLogin: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});

// Export Compoment
module.exports = LoginForm;
