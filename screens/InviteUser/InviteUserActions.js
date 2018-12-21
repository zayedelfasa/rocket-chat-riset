import { InviteUserStore } from './InviteUserStore';
import EndPoint from '../EndPoint/EndPointClass';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import String_local_storage from '../../configs/String_local_storage';
const InviteUserActions = "InviteUserActions : ";

export async function fetch_invite_user(token, room_id, user_id, user_invite_id) {
    console.log(InviteUserActions + " token : " + token);
    console.log(InviteUserActions + " room_id : " + room_id);
    console.log(InviteUserActions + " user_id : " + user_id);
    console.log(InviteUserActions + " user_invite_id : " + user_invite_id);
    console.log(InviteUserActions + " endpoint : " + new EndPoint().channel_invite_user_post());

    const length_invite_id = user_invite_id.toString().split(",");
    console.log(length_invite_id);
    InviteUserStore.set_is_loading(true);
    let i = 0;
    do {
        console.log(InviteUserActions + " NILAI KE : " + length_invite_id[i]);
        if(i < length_invite_id.length && (InviteUserStore.get_is_loading() == true)) {
            await axios.post(new EndPoint().channel_invite_user_post(), {
                roomId: room_id,
                userId: length_invite_id[i]
            }, {
                    headers: {
                        'Content-type': 'application/json',
                        'X-Auth-Token': token,
                        'X-User-Id': user_id
                    }
                }).then(res => {
                    console.log(InviteUserActions + " fetch_invite_user ", res.data); //+ JSON.stringify(res.data));
                    InviteUserStore.set_response(res.data);
                    // InviteUserStore.set_is_loading(false);
                }).catch(error => {
                    console.log(InviteUserActions + " error " + error);
                    InviteUserStore.set_is_loading(false);
                });
        } else {
            InviteUserStore.set_is_loading(false);
        }
        i++;
    } while(i < length_invite_id.length);

    // InviteUserStore.set_is_loading(true);
    // await axios.post(new EndPoint().channel_invite_user_post(),{
    //     roomId : roomId,
    //     userId : user_invite_id
    // },{
    //     headers: {
    //         'Content-type' : 'application/json',
    //         'X-Auth-Token' : token,
    //         'X-User-Id' : user_id
    //     }
    // }).then(res => {
    //     console.log(InviteUserActions + " fetch_invite_user ", res.data); //+ JSON.stringify(res.data));
    //     InviteUserStore.set_response(res.data);
    //     InviteUserStore.set_is_loading(false);
    // }).catch(error => {
    //     console.log(InviteUserActions + " error " + error);
    // });
}

export async function fetch_user_list(token, user_id) {
    console.log(InviteUserActions + " token : " + token);
    console.log(InviteUserActions + " user_id : " + user_id);
    await axios.get(new EndPoint().channel_user_list_get(),{
        headers: {
            'X-Auth-Token' : token,
            'X-User-Id' : user_id
        }
    }).then(res => {
        console.log(InviteUserActions + " fetch_user_list ", res.data); //+ JSON.stringify(res.data));
        InviteUserStore.set_response_all_user(res.data);
    }).catch(error => {
        console.log(InviteUserActions + " error " + error);
    });
}