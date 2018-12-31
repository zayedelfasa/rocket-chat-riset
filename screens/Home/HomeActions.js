import { HomeStore } from './HomeStore';
import EndPoint from '../EndPoint/EndPointClass';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import String_local_storage from '../../configs/String_local_storage';
import { QueueingSubject } from 'queueing-subject';
import websocketConnect from 'rxjs-websockets';
import UUIDGenerator from 'react-native-uuid-generator';

const HomeActions = "HomeActions : ";

// this subject queues as necessary to ensure every message is delivered
// const input = new QueueingSubject();
// input.next(new EndPoint().socket_ping_rocketchat());

export async function get_room_list(token, user_id) {
    console.log(HomeActions + " token " + token);
    console.log(HomeActions + " user_id " + user_id);
    console.log(HomeActions + " endpoint " + new EndPoint().channel_list_get());

    HomeStore.set_is_loading(true);

    await axios.get(new EndPoint().channel_list_get(), {
        headers: {
            'X-Auth-Token' : token,
            'X-User-Id' : user_id
        }
    }).then(res => {
        console.log(HomeActions + " get_room_list ", res.data); //+ JSON.stringify(res.data));
        HomeStore.set_room_list(res.data.groups);
        HomeStore.set_is_loading(false);
    }).catch(error => {
        console.log(HomeActions + " error " + error);
    }); 

    // const api = create({
    //     baseURL: new EndPoint().get_http(),
    //     headers: {
    //         'X-Auth-Token' : token,
    //         'X-User-Id' : user_id
    //     }
    //   });

    // api
    //     .get(new EndPoint().channel_list_get())
    //     .then((response) => console.log(response))  
    //     .then(console.log);
}

export async function go_back_create_channel() {
    console.log("HAY HAY HAY");
}



export async function set_initialize() {
    HomeStore.set_is_loading(null);
    HomeStore.set_room_list(null);
}