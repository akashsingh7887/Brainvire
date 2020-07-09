import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <View style={styles.container} />;
  }
}

export default Login;
