import React from "react";
import { View } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";
import * as MyChatActions from './MyChatActions';
import { MyChatStore } from './MyChatStore';
import { connect } from 'remx';

import UUIDGenerator from 'react-native-uuid-generator';

class MyChat extends React.Component {
    state = {
        messages: [],
        input_text_chat: ""
    };

    constructor(props) {
        super(props);
        console.log("DATA PESAN MASUK ", this.props.message);
    }

    async componentDidMount() {
        // this.setState({
        //   messages: [
        //     {
        //       _id: 1,
        //       text: "I think we passed the first step of the tutorial. We will now need a Pusher account!",
        //       createdAt: new Date(),
        //       user: {
        //         _id: 1,
        //         name: "React Native",
        //         avatar: "https://placeimg.com/140/140/any"
        //       }
        //     }
        //   ]
        // });

        MyChatActions.stream_room(await UUIDGenerator.getRandomUUID(), "GENERAL");

        // this.setState({
        //     messages: [
        //         {
        //             _id: 1,
        //             text: 'id ke 1',
        //             createdAt: new Date(),
        //             user: {
        //                 _id: 3,
        //                 name: 'React Native',
        //                 avatar: 'https://placeimg.com/140/140/any',
        //             },
        //         },
        //         {
        //             _id: 2,
        //             text: 'id ke 2',
        //             createdAt: new Date(),
        //             user: {
        //                 _id: 3,
        //                 name: 'React Native',
        //                 avatar: 'https://placeimg.com/140/140/any',
        //             },
        //         },
        //         {
        //             _id: 3,
        //             text: 'id ke 3',
        //             createdAt: new Date(),
        //             user: {
        //                 _id: 1,
        //                 name: 'React Native',
        //                 avatar: 'https://placeimg.com/140/140/any',
        //             },
        //         },
        //         {
        //             _id: 4,
        //             text: 'id ke 4',
        //             createdAt: new Date(),
        //             user: {
        //                 _id: 3,
        //                 name: 'React Native',
        //                 avatar: 'https://placeimg.com/140/140/any',
        //             },
        //         },
        //         {
        //             _id: 5,
        //             text: 'id ke 5',
        //             createdAt: new Date(),
        //             user: {
        //                 _id: 2,
        //                 name: 'React Native',
        //                 avatar: 'https://placeimg.com/140/140/any',
        //             },
        //         },
        //         {
        //             _id: 6,
        //             text: 'id ke 6',
        //             createdAt: new Date(),
        //             user: {
        //                 _id: 2,
        //                 name: 'React Native',
        //                 avatar: 'https://placeimg.com/140/140/any',
        //             },
        //         },
        //     ],
        // })
    }

    _storeMessages(messages) {
        console.log("DATA MASUK : ", messages);
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }

    async onSend(messages = []) {
        console.log("DATA " + this.state.input_text_chat);
        var msg = this.state.input_text_chat;
        var id = await UUIDGenerator.getRandomUUID();

        MyChatActions.send_chat(id, "GENERAL", msg);

        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    // componentDidUpdate(prevProps) {
    //     console.log("DATA componentDidUpdate prevProps : ", prevProps);
    // }

    componentWillReceiveProps(newProps) {
        console.log("DATA componentWillReceiveProps", newProps);

        if(newProps.message.user._id != "xSYcyHRdDGR4LJAxM"){
            this._storeMessages(newProps.message);
        }
    } 

    render() {
        // this.props.message ?
        //     () => {this._storeMessages(this.props.message)}
        //     : null;
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                onInputTextChanged={e => {
                    // console.log(e);
                    this.setState({ input_text_chat: e })
                }}
                user={{
                    _id: "xSYcyHRdDGR4LJAxM",
                }}
            />
            // </View>
        );
    }
}

function mapStateToProps(ownProps) {
    return {
        message: MyChatStore.get_message()
    }
}

export default connect(mapStateToProps)(MyChat);