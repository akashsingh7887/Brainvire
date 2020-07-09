import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../screens/Login/_Login';
import SignUp from '../../screens/SignUp/_SignUp';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
}
