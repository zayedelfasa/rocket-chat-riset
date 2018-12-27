import React, {Component} from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
    Text,
    AsyncStorage,
    Image
} from 'react-native';
import Colors from '../../styles/Colors';
import String_local_storage from '../../configs/String_local_storage';
import { Examples, Title, TextInput, Button } from '@shoutem/ui';

class AuthLoginScreen extends Component {

    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem(String_local_storage.is_login);
        console.log("userToken is ", userToken);

        this.props.navigation.navigate("Login");

        // setTimeout(() => {
        //     this.props.navigation.navigate(userToken === "login" ? "Home" : "Login");
        // }, 1000);
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Title>APLIKASI RISET ROCKETCHAT</Title>
                <ActivityIndicator size="large" color={Colors.grey} />
            </View>
        );
    }   
}

export default AuthLoginScreen;