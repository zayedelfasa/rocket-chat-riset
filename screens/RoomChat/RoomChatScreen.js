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
import { GiftedChat } from "react-native-gifted-chat";
import * as RoomChatActions from './RoomChatActions';
import emojiUtils from 'emoji-utils';
import SlackMessage from './SlackMessage';
import moment from 'moment';
const getNameClass = "RoomChatScreen : ";

class RoomChatScreen extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props;
        
        this.state = {
            user_room: "",
            room_id: navigation.getParam("room_id", null),
            messages: [],
            input_text_chat: "",
            user_id: ""
        }
    }

    async componentDidMount() {
        const token =  await AsyncStorage.getItem(String_local_storage.user_login_token);
        const user_id =  await AsyncStorage.getItem(String_local_storage.user_login_id);
        this.setState({user_id});
        console.log(getNameClass + "component did mount room id 1: " + this.state.room_id);
        console.log(getNameClass + "TOKEN : " + token);
        RoomChatActions.get_initialize_all_store();
        RoomChatActions.login_chat(token);
        RoomChatActions.stream_room(this.state.room_id);

        var testdate = moment("03-25-2015 +0000", "MM-DD-YYYY Z").valueOf();

        var date = moment();

        var datenow = date.format("MM-DD-YYYY Z");
        var dateminus = date.subtract(1,"days").format("MM-DD-YYYY Z");

        console.log(getNameClass + "exampleDate now : " + moment(datenow.toString() + " +0000", "MM-DD-YYYY Z").valueOf());
        console.log(getNameClass + "exampleDate lastday : " + moment(dateminus.toString() + " +0000", "MM-DD-YYYY Z").valueOf());
        RoomChatActions.get_history(this.state.room_id, moment(datenow.toString() + " +0000", "MM-DD-YYYY Z").valueOf(), moment(dateminus.toString() + " +0000", "MM-DD-YYYY Z").valueOf());
    }

    async onSend(messages = []) {
        console.log("DATA " + this.state.input_text_chat);
        RoomChatActions.send_chat(this.state.room_id, this.state.input_text_chat);
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    componentWillReceiveProps(newProps) {
        console.log(getNameClass + " componentWillReceiveProps ", newProps.history_message.header);
        try {
            if (newProps.msg.user._id != this.state.user_id) {
                this._storeMessages(newProps.msg);
            }
        } catch (error) {
            // ...
            console.log(getNameClass+"error on user id : "+error);
        }

        try {
            console.log("telah melewati try catch");
            if (newProps.history_message.header == "loadhistorymessage") {
                console.log("componentWillReceiveProps newProps.history_message in");
            }
        } catch(error) {
            console.log(getNameClass + "error on history message : "+ error);
        }
    }

    _storeMessages(messages) {
        console.log("DATA MASUK : ", messages);
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
        RoomChatStore.set_message({});        
    }

    renderMessage(props) { 
        const { currentMessage: { text: currText } } = props;
    
        let messageTextStyle;
    
        // Make "pure emoji" messages much bigger than plain text.
        if (currText && emojiUtils.isPureEmojiString(currText)) {
          messageTextStyle = {
            fontSize: 28,
            // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
            lineHeight: Platform.OS === 'android' ? 34 : 30,
          };
        }
    
        return (
          <SlackMessage {...props} messageTextStyle={messageTextStyle} />
        );
      }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                onInputTextChanged={e => {
                    // console.log(e);
                    this.setState({ input_text_chat: e })
                }}
                user={{
                    _id: this.state.user_id,
                }}
                
                renderMessage={this.renderMessage}
            />
        )
    }
}

function mapStateToProps(ownProps) {
    return {
        room_id: RoomChatStore.get_room_id(),
        msg: RoomChatStore.get_message(),
        history_message: RoomChatStore.get_history_message()
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