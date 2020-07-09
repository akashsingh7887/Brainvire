import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home/_Home';
import DrawerComponent from "../Drawer/drawer"
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home" 
    drawerContent={props => <DrawerComponent />}
    drawerType="front"
    drawerStyle={{height:"100%"}}
    >
    <Stack.Screen
          name="Home"
          component={Home}
          
        />
  </Drawer.Navigator>


  );
}
