import React, { Component } from 'react';
import { Platform, StyleSheet, View, Alert, StatusBar, Image, TouchableOpacity, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Styles from '../../styles/Styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import Colors from '../../styles/Colors';
import * as LoginActions from './LoginActions';
import { LoginStore } from './LoginStore';
import { connect } from 'remx';
import { Examples, Title, TextInput, Button, Text } from '@shoutem/ui';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama_pengguna: "zayedelfasa",
            kata_sandi: "zayedelfasa"
        }
    }

    handleEmail = (text) => {
        this.setState({ nama_pengguna: text })
    }
    handlePassword = (text) => {
        this.setState({ kata_sandi: text })
    }

    async login(username, pass) {
        // alert('email: ' + username + ' password: ' + pass);
        await LoginActions.fetch_login(username, pass);
    }

    componentWillReceiveProps(newProps) {
        console.log("DATA componentWillReceiveProps", newProps.stat_login);
        if (newProps.stat_login) {
            this.props.navigation.navigate("Home");
        }
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.stat_login);
    }

    componentDidMount() {

    }

    render() {
        return (
            // <View style={styles.container}>
            //     <TextInput style={styles.input}
            //         underlineColorAndroid="transparent"
            //         placeholder="Email"
            //         placeholderTextColor="#9a73ef"
            //         autoCapitalize="none"
            //         onChangeText={this.handleEmail} />
            //     <TextInput style={styles.input}
            //         underlineColorAndroid="transparent"
            //         placeholder="Password"
            //         placeholderTextColor="#9a73ef"
            //         autoCapitalize="none"
            //         onChangeText={this.handlePassword} />
            //     <TouchableOpacity
            //         style={styles.submitButton}
            //         onPress={
            //             () => this.login(this.state.nama_pengguna, this.state.kata_sandi)
            //         }>
            //         <Text style={styles.submitButtonText}> Login </Text>
            //     </TouchableOpacity>
            // </View>
            <View style={styles.container}>
                <Title>LOGIN CHAT</Title>
                <TextInput
                    style={styles.input}
                    placeholder={"Email"}
                    onChangeText={this.handleEmail} />
                <TextInput
                    style={styles.input}
                    placeholder={"Password"}
                    secureTextEntry
                    onChangeText={this.handlePassword} />
                <Button styleName="secondary" onPress = {() => this.login(this.state.nama_pengguna, this.state.kata_sandi)}>
                    <Text>Login</Text>
                </Button>
            </View>
        )
    }
}

function mapStateToProps(ownProps) {
    return {
        stat_login: LoginStore.get_status_success_login()
    }
}

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        padding: 10, 
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginBottom: 5
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})