import React,{Component, useEffect} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './rootNavigator/LoginStack';
import WelcomeScreen from '../screens/Welcome/_Welcome';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  useEffect(()=>{
   setTimeout(()=> SplashScreen.hide(),200)

  },[])
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
