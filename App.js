/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import AuthLoginScreen from './screens/AuthLogin/AuthLoginScreen';
import LoginScreen from './screens/Login/LoginScreen';
import LeftDrawerNavigator from './configs/Navigations/LeftDrawerNavigator';

// class App extends Component {
//   render() {
//     return <MyChat />;
//   }
// }
// export default App;

export default createSwitchNavigator({
  AuthenticationLogin: {
    screen: AuthLoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: LeftDrawerNavigator,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
}, {
    initialRouteName: 'AuthenticationLogin',
    headerMode: "none"
  });
