import React, { Component } from 'react';
import { Platform, StyleSheet, View, Alert, StatusBar, Image, TouchableOpacity, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Styles from '../../styles/Styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../styles/Colors';
// import * as InviteUserActions from './InviteUserActions';
import { RoomChatStore } from './RoomChatStore';
import { connect } from 'remx';
import { Examples, Title, TextInput, Button, Text } from '@shoutem/ui';
import String_local_storage from '../../configs/String_local_storage';
import {NavigationEvents} from 'react-navigation';
const getNameClass = "RoomChatScreen :";

class RoomChatScreen extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props;
        this.state = {
            user_room: "",
            room_id: navigation.getParam("room_id", null)
        }
        
    }

    componentDidMount() {
        console.log(getNameClass + "component did mount room id 1: " + this.state.room_id);
        RoomChatStore.set_room_id(this.state.room_id);
        console.log(getNameClass + "component did mount room id 2: " + RoomChatStore.get_room_id());
    }

    render() {
        return (
            <View style={styles.container}></View>
        )
    }
}

function mapStateToProps(ownProps) {
    return {
        room_id: RoomChatStore.get_room_id()
    }
}

export default connect(mapStateToProps)(RoomChatScreen);

// export default RoomChatScreen;

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