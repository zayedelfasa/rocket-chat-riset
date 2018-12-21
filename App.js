/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createSwitchNavigator } from 'react-navigation';
import AuthLoginScreen from './screens/AuthLogin/AuthLoginScreen';
// import LoginScreen from './screens/Login/LoginScreen';
import IntroScreenStack from './configs/Navigations/IntroScreenStack';
import LeftDrawerNavigator from './configs/Navigations/LeftDrawerNavigator';

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
    // screen: LoginScreen,
    screen: IntroScreenStack,
    navigationOptions: {
      header: null
    }
  },

}, {
    initialRouteName: 'AuthenticationLogin',
    headerMode: "none"
  });
