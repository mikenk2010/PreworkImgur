/**
 * Bao Nguyen
 * Lab - Imgur
 */

import React, { Component } from 'react';
import { AppRegistry} from 'react-native';

import Login from "./Apps/login";

export default class PreworkImgur extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('PreworkImgur', () => PreworkImgur);
