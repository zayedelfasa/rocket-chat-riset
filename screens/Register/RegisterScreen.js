import React, { Component } from 'react';
import { Platform, StyleSheet, View, Alert, StatusBar, Image, TouchableOpacity, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Styles from '../../styles/Styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../styles/Colors';
import * as RegisterActions from './RegisterActions';
import { RegisterStore } from './RegisterStore';
import { connect } from 'remx';
import { Examples, Title, TextInput, Button, Text } from '@shoutem/ui';
import Icon from 'react-native-vector-icons/Ionicons';
const getClassName = "RegisterScreen : ";

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "zayedelfasa",
            email: "zayedelfasa",
            pass: "",
            name: "",
            secretURL: ""
        }
    }

    handleEmail = (text) => {
        this.setState({ nama_pengguna: text })
    }
    handlePassword = (text) => {
        this.setState({ kata_sandi: text })
    }

    async register(username, email, password, name) {

        // console.log(RegisterActions + " username : " + user.username);
        // console.log(RegisterActions + " email : " + user.email);
        // console.log(RegisterActions + " pass : " + user.pass);
        // console.log(RegisterActions + " name : " + user.name);
        // console.log(RegisterActions + " secretURL : " + user.secretURL);

        var user = {
            username: username,
            email: email,
            pass: password,
            name: name,
            secretURL: this.state.secretURL
        }

        await RegisterActions.fetch_register(user);
    }

    componentWillReceiveProps(newProps) {
        console.log(getClassName + " componentWillReceiveProps : ", newProps);
        if(!newProps.is_loading) {
            this.props.navigation.goBack();
        }
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.stat_login);
    }

    componentDidMount() {

    }

    go_back = () => {
        this.props.navigation.goBack();
    }

    change_username = (username) => {
        this.setState({username});
        console.log(getClassName + " username : " + this.state.username);
    }

    change_nama_lengkap = (name) => {
        this.setState({name});
    }

    change_email = (email) => {
        this.setState({email});
    }

    change_password = (pass) => {
        this.setState({pass});
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={[styles.input, {marginLeft: 15, marginTop: 15 }]} onPress={this.go_back}>
                    <Icon name="ios-arrow-back" size={30} color={Colors.black} />
                </TouchableOpacity>
                <View style={styles.container}>
                    <View style={[styles.input, { alignItems: 'center' }]}>
                        <Title>Register User</Title>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder={"Long Name"}
                        onChangeText={this.change_nama_lengkap} />
                    <TextInput
                        style={styles.input}
                        placeholder={"Username"}
                        onChangeText={this.change_username} />
                    <TextInput
                        style={styles.input}
                        placeholder={"Email"}
                        onChangeText={this.change_email} />
                    <TextInput
                        style={styles.input}
                        placeholder={"Password"}
                        secureTextEntry
                        onChangeText={this.change_password} />
                    <Button styleName="secondary" onPress={() => this.register(this.state.username, this.state.email, this.state.pass, this.state.name)}>
                        {
                            this.props.is_loading == true ?
                                <ActivityIndicator size="large" color={Colors.grey} />
                                :
                                <Text>Register</Text>
                        }
                    </Button>
                </View>
            </View>
        )
    }
}

function mapStateToProps(ownProps) {
    return {
        is_loading: RegisterStore.get_is_loading()
    }
}

export default connect(mapStateToProps)(RegisterScreen);

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