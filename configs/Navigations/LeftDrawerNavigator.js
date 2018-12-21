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
import { TouchableOpacity, View } from 'react-native';
import RoomCreateScreen from '../../screens/RoomCreate/RoomCreateScreen';
import RoomChatScreen from '../../screens/RoomChat/RoomChatScreen';
import InviteUserScreen from '../../screens/InviteUser/InviteUserScreen';
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
                        onPress={() => navigation.navigate("PageRoomCreateStackNavigator")}>
                        <View style={{ marginRight: 15 }}>
                            <Icon name="ios-add" size={30} color={Colors.white} />
                        </View>
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
    }, 

    PageChatRoom: {
        screen: RoomChatScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Room Chat",
            headerStyle: {
                backgroundColor: Colors.black,
            },
            headerTintColor: Colors.black,
            headerTitleStyle: {
                // fontWeight: 'bold',
                color: Colors.white
            },
            headerRight:
                (
                    <TouchableOpacity
                        onPress={() => {
                            console.log("LeftDrawerNavigation : " + navigation.getParam("room_id", null));
                            navigation.navigate("PageInviteUser", {
                                room_id : navigation.getParam("room_id", null)
                            });
                        }}>
                        <View style={{ marginRight: 15 }}>
                            <Icon name="ios-add" size={30} color={Colors.white} />
                        </View>
                    </TouchableOpacity>
                ),
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
    },

    PageInviteUser: {
        screen: InviteUserScreen,
        navigationOptions: ({ navigation }) => ({
            title: "User Invite",
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
}, {
        transitionConfig: getSlideFromRightTransition
    });

// ,{
//     contentComponent: NavigationUser,
//     drawerWidth: 300
// }