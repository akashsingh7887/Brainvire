import React, {Component} from 'react';
import {Button, View, Text, StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import styles from './styles';
import * as colors from "../../assets/colors/colors"
// import _TextInput from "../../components/TextInput/_TextInput"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<View style={styles.container} >
<StatusBar backgroundColor={colors.white}></StatusBar>

    </View>);
  }
}

export default Login;
