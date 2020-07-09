import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './rootNavigator/loginStack';
import WelcomeScreen from '../screens/Welcome/_Welcome';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginStack}           
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
