/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import App from './app/screens/index';
// export default App;

import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/Home/HomeScreen';
import { TouchableOpacity } from 'react-native';
import RoomCreateScreen from '../../screens/RoomCreate/RoomCreateScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import Colors from '../../styles/Colors';

export default createStackNavigator({
    PageDrawerHome: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Group Chat",
            headerStyle: {
                backgroundColor: Colors.black,
            },
            headerTintColor: Colors.black,
            headerTitleStyle: {
                // fontWeight: 'bold',
                color: Colors.white
            },
            headerLeft: null,
            // (
            //     <TouchableOpacity
            //         style={Styles.headerButton}
            //         onPress={() => navigation.openDrawer()}>
            //         <Icon name="ios-menu" size={30} color={Colors.white} />
            //     </TouchableOpacity>
            // ),
            headerRight:
                (
                    <TouchableOpacity
                        style={Styles.headerButton}
                        onPress={() => navigation.navigate("PageRoomCreateStackNavigator")}>
                        <Icon name="ios-add" size={30} color={Colors.white} />
                    </TouchableOpacity>
                ),
        }),
    },

    PageRoomCreateStackNavigator: {
        screen: RoomCreateScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Create New Room",
            headerStyle: {
                backgroundColor: Colors.black,
            },
            headerTintColor: Colors.black,
            headerTitleStyle: {
                // fontWeight: 'bold',
                color: Colors.white
            },
            headerLeft:
                (
                    <TouchableOpacity
                        style={Styles.headerButton}
                        onPress={() => {

                            navigation.goBack()
                        }}>
                        <Icon name="ios-arrow-back" size={30} color={Colors.white} />
                    </TouchableOpacity>
                )
        }),
    }

    // PageDrawerLamaran: {
    //     screen: LamaranNavigator
    // },
    // PageDrawerKontrakKerja: {
    //     screen: KontrakKerjaNavigator
    // },
    // PageDrawerAbsen: {
    //     screen: AbsensiNavigator
    // },
    // PageDrawerProfile: {
    //     screen: ProfileNavigator
    // },
    // PageDrawerPrivacyPolicy: {
    //     screen: PrivacyPolicyNavigator
    // }
}, {
        transitionConfig: getSlideFromRightTransition
    });

// ,{
//     contentComponent: NavigationUser,
//     drawerWidth: 300
// }