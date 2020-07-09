import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../screens/Login/_Login';
import Home from '../../navigators/rootNavigator/HomeStack';
import { connect } from 'react-redux';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
class LoginStack extends Component {
  render() {

    return (
      <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Home" component={Home} />
        {this.props.isLoggedIn&&<Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />}
      </Stack.Navigator>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(LoginStack);