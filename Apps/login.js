import React, {Component} from "React";
import {AppRegistry, Image, Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native"

import LoginForn from "../Apps/loginForm.js";

export default class Login extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../images/batman_logo.png')}
            />
            <Text style={styles.title}>
              Batman Team
            </Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForn />
          </View>      
    </KeyboardAvoidingView>
    )
  }
}

// StyleSheet
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width:150,
    height:150
  },
  title: {
    color:'#fff',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  },
  formContainer: {
  }

});

// Export Compoment
module.exports = Login;
