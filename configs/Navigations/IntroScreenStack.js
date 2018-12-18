import React from "react";
import { TabNavigator, createBottomTabNavigator, StackNavigator, SwitchNavigator, createStackNavigator } from "react-navigation";
import LoginScreen from '../../screens/login/LoginScreen';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

export default createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    }   
}, {
        transitionConfig: getSlideFromRightTransition
    });