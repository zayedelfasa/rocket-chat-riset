import { QueueingSubject } from 'queueing-subject';
import websocketConnect from 'rxjs-websockets';
import {MyChatStore} from './MyChatStore';

// this subject queues as necessary to ensure every message is delivered
const input = new QueueingSubject();
const id_username = "";

// this method returns an object which contains two observables
const { messages, connectionStatus } = websocketConnect('ws://rnd.clouds.id:3000/websocket', input)

var connectData = JSON.stringify({ "msg": "connect", "version": "1", "support": ["1"] });
var login = JSON.stringify({ "msg": "method", "method": "login", "id": "42", "params": [{ "user": { "username": "zayedelfasa" }, "password": "zayedelfasa" }]});

// send data to the server
input.next(connectData);
input.next(login);

// the connectionStatus stream will provides the current number of websocket
// connections immediately to each new observer and updates as it changes
const connectionStatusSubscription = connectionStatus.subscribe(numberConnected => {
    console.log('number of connected websockets:', numberConnected)
});

// the websocket connection is created lazily when the messages observable is
// subscribed to
const messagesSubscription = messages.subscribe((message) => {
    var message_to_json = JSON.parse(message);
    console.log('received message:', message_to_json);
    if (message_to_json.msg == "ping") {
        var pingServer = { "msg": "ping" };
        input.next(JSON.stringify(pingServer));
    }

    if (message_to_json.msg == "result") {
        // id_username = message_to_json.result.id;
    }

    if(message_to_json.msg == "changed" && message_to_json.collection == "stream-room-messages") {
        var message = {
            _id: message_to_json.fields.args[0]._id,
            text: message_to_json.fields.args[0].msg,
            createdAt: new Date(),
            user: {
                _id: message_to_json.fields.args[0].u._id,
                name: message_to_json.fields.args[0].u.name,
                avatar: 'https://placeimg.com/140/140/any',
            }
        }   
        console.log("stream-room-messages ", message);
        MyChatStore.set_message(message);
    }
});

export async function send_chat(id, room_group_id, message) {
    console.log("MyChatActions.js send_chat id : " , id);
    console.log("MyChatActions.js send_chat room_group_id : ", message);
    var send_data = JSON.stringify({"msg": "method","method": "sendMessage","id": "42","params": [{"_id":id,"rid": room_group_id,"msg": message}]});
    input.next(send_data);
}

export async function stream_room(id, room_id) {
    console.log("MyChatActions.js stream_room id : ", id);
    console.log("MyChatActions.js stream_room room_id : ", room_id);
    var send_data = JSON.stringify({"msg": "sub","id": id,"name": "stream-room-messages","params":[room_id,false]});
    input.next(send_data);
}