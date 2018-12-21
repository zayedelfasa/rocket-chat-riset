import { RoomChatStore } from './RoomChatStore';
import EndPoint from '../EndPoint/EndPointClass';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import String_local_storage from '../../configs/String_local_storage';
const RoomChatActions = "RoomChatActions";

export async function fetch_invite_user(token, room_id, user_id) {
    console.log(RoomChatActions + " token : " + token);
    console.log(RoomChatActions + " room_id : " + room_id);
    console.log(RoomChatActions + " user_id : " + user_id);
    console.log(RoomChatActions + " endpoint : " + new EndPoint().channel_invite_user_post());   
}