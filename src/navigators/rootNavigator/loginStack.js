import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../screens/Login/_Login';
import Home from '../../navigators/rootNavigator/HomeStack';
import {connect} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import _Text from '../../components/Text/_Text';
import styles from '../../screens/Login/styles';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
class LoginStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: ({navigation}) => (
              <View
                style={{
                  height: 70,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  justifyContent: 'space-between',
                }}>
                <Entypo name={'menu'} size={30} onPress={() => {}} />
                <_Text style={styles.shop_text}>
                  Shop
                  <_Text style={styles.cart_text}>cart</_Text>
                </_Text>
                <View style={{width: 30}} />
              </View>
            ),
          }}
        />
        {!this.props.isLoggedIn && (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};
export default connect(
  mapStateToProps,
  null,
)(LoginStack);
