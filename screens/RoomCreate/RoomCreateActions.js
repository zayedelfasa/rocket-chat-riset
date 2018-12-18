import { RoomCreateStore } from './RoomCreateStore';
import EndPoint from '../EndPoint/EndPointClass';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import String_local_storage from '../../configs/String_local_storage';
const RoomCreateActions = "RoomCreateActions";

export async function fetch_create_room(token, user_id, room_name) {
    console.log(RoomCreateActions + " token " + token);
    console.log(RoomCreateActions + " user_id " + user_id);
    console.log(RoomCreateActions + " room_name " + new EndPoint().channel_list_get());

    RoomCreateStore.set_status_success_create_room(true);

    await axios.post(new EndPoint().channel_create_room() , {
        'name' : room_name
    } ,{
        headers: {
            'Content-type' : 'application/json',
            'X-Auth-Token' : token,
            'X-User-Id' : user_id
        }
    }).then(res => {
        console.log(RoomCreateActions + " get_room_list ", res.data); //+ JSON.stringify(res.data));
        // RoomCreateStore.set_room_list(res.data.groups);
        RoomCreateStore.set_status_success_create_room(false);
    }).catch(error => {
        console.log(RoomCreateActions + " error " + error);
    }); 
}

export async function set_initialize() {
    RoomCreateStore.set_status_success_create_room(null);
}