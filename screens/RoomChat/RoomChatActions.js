import { RoomChatStore } from './RoomChatStore';
import EndPoint from '../EndPoint/EndPointClass';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import String_local_storage from '../../configs/String_local_storage';
import { QueueingSubject } from 'queueing-subject';
import websocketConnect from 'rxjs-websockets';
import UUIDGenerator from 'react-native-uuid-generator';
// import {create} from 'apisauce';
const RoomChatActions = "RoomChatActions : ";

// this subject queues as necessary to ensure every message is delivered
const input = new QueueingSubject();

// this method returns an object which contains two observables
const { messages, connectionStatus } = websocketConnect(new EndPoint().websocket_link(), input);

// send data to the server
input.next(new EndPoint().socket_connect_rocketchat());

// the connectionStatus stream will provides the current number of websocket
// connections immediately to each new observer and updates as it changes
const connectionStatusSubscription = connectionStatus.subscribe(numberConnected => {
    console.log(RoomChatActions+'number of connected websockets: ', numberConnected)
});

// the websocket connection is created lazily when the messages observable is
// subscribed to
const messagesSubscription = messages.subscribe((message) => {
    var message_to_json = JSON.parse(message);
    console.log(RoomChatActions+'received message:', message_to_json);
    if (message_to_json.msg == "ping") {
        input.next(new EndPoint().socket_ping_rocketchat()  );
    }

    // if (message_to_json.msg == "result") {
    //     // id_username = message_to_json.result.id;
    // }

    if(message_to_json.msg == "changed" && message_to_json.collection == "stream-room-messages") {
        var message = {
            _id: message_to_json.fields.args[0]._id,
            text: message_to_json.fields.args[0].msg,
            createdAt: new Date(),
            user: {
                _id: message_to_json.fields.args[0].u._id,
                name: message_to_json.fields.args[0].u.name,
                // avatar: 'https://placeimg.com/140/140/any',
            }
        }   
        console.log("stream-room-messages ", message);
        RoomChatStore.set_message(message);
    }

    if(message_to_json.msg == "result") {
        console.log(RoomChatActions + " message load history in message_to_json.result.unreadNotLoaded : ", message_to_json.result.unreadNotLoaded);
        RoomChatStore.set_history_message({
            header: 'loadhistorymessage',
            data: message_to_json.result.messages,
            unreadNotLoaded: message_to_json.result.unreadNotLoaded
        });
    }
});

// untuk stream chatt yg sedang berjalan
export async function stream_room(room_id) {
    // this id for unique ID:
    var id = await UUIDGenerator.getRandomUUID();
    var params = [room_id,false];
    console.log(RoomChatActions + " stream_room id : ", id);
    console.log(RoomChatActions + " stream_room room_id : ", room_id);
    input.next(new EndPoint().socket_stream_room(id, params));
}

export async function send_chat(room_group_id, message) {
    var id = await UUIDGenerator.getRandomUUID();
    console.log(RoomChatActions + " send_chat id : " , id);
    console.log(RoomChatActions + " send_chat room_group_id : ", message);
    // var send_data = JSON.stringify({"msg": "method","method": "sendMessage","id": "42","params": [{"_id":id,"rid": room_group_id,"msg": message}]});
    input.next(new EndPoint().socket_send_chat(id, room_group_id, message));
}

export async function login_chat(token) {
    input.next(new EndPoint().socket_login_with_auth(token));
}

export async function get_initialize_all_store() {
    RoomChatStore.set_username(null);
    RoomChatStore.set_password(null);
    RoomChatStore.set_room_id(null);
    RoomChatStore.set_status_success_create_room(null);
    RoomChatStore.set_message({});
    RoomChatStore.set_history_message([]);
    RoomChatStore.set_loading_earlier(false);
}

export async function get_history(room_id, gettime_start, gettime_end, count_load_message) {
    // console.log(RoomChatActions + " get_history: " + JSON.stringify({
    //     "msg": "method",
    //     "method": "loadHistory",
    //     "id": "42",
    //     "params": [ room_id , { "$date": gettime_start }, 50, { "$date": gettime_end } ]
    // }));
    input.next(new EndPoint().socket_history_chat(room_id, gettime_start, gettime_end, count_load_message)); 
    // console.log(RoomChatActions + " get_history: ");
}

export async function get_latest_history(room_id, gettime_end, count_load_message) {
    input.next(new EndPoint().socket_history_latest_chat(room_id, count_load_message, gettime_end));
}

