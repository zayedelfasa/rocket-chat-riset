import React, { Component } from 'react';
import { Platform, StyleSheet, View, Alert, StatusBar, Image, TouchableOpacity, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Styles from '../../styles/Styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../styles/Colors';
import * as RoomCreateActions from './RoomCreateActions';
import { RoomCreateStore } from './RoomCreateStore';
import { connect } from 'remx';
import { Examples, Title, TextInput, Button, Text } from '@shoutem/ui';
import String_local_storage from '../../configs/String_local_storage';
import {NavigationEvents} from 'react-navigation';
const getNameClass = "RoomCreateScreen : ";

class RoomCreateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_room: ""
        }
    }

    handleEmail = (text) => {
        this.setState({ user_room: text })
    }

    async create_room(user_room) {
        // alert('email: ' + username + ' password: ' + pass);
        // await RoomCreateActions.fetch_login(username, pass);
        const username = await AsyncStorage.getItem(String_local_storage.user_login_id);
        const user_token = await AsyncStorage.getItem(String_local_storage.user_login_token);
        await RoomCreateActions.fetch_create_room(user_token, username, user_room);
    }

    componentWillReceiveProps(newProps) {
        console.log("DATA componentWillReceiveProps", newProps.stat_login);
        if (!newProps.stat_loading) {
            this.props.navigation.setParams({ name: 'Lucy' })
            this.props.navigation.goBack(null, { name: 'Lucy' });
        }
    }

    // componentDidUpdate(prevProps) {
    //     console.log(this.props.stat_login);
    // }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Title>CREATE NEW ROOM</Title>
                <TextInput
                    style={styles.input}
                    placeholder={"Room Name"}
                    onChangeText={this.handleEmail} />
                <Button disabled = {this.props.stat_loading} styleName="secondary" onPress={() => this.create_room(this.state.user_room)}>
                    {
                        this.props.stat_loading == true ?
                            <ActivityIndicator size="large" color={Colors.grey} />
                            :
                            <Text>CREATE</Text>
                    }
                </Button>
            </View>
        )
    }
}

function mapStateToProps(ownProps) {
    return {
        stat_loading: RoomCreateStore.get_status_success_create_room()
    }
}

export default connect(mapStateToProps)(RoomCreateScreen);

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