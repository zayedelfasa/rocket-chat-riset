import { RegisterStore } from './RegisterStore';
import EndPoint from '../EndPoint/EndPointClass';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import String_local_storage from '../../configs/String_local_storage';
import {create} from 'apisauce';
const RegisterActions = "RegisterActions";

export async function fetch_register(user) {
    console.log(user);
    console.log(RegisterActions + " username : " + user.username);
    console.log(RegisterActions + " email : " + user.email);
    console.log(RegisterActions + " pass : " + user.pass);
    console.log(RegisterActions + " name : " + user.name);
    console.log(RegisterActions + " secretURL : " + user.secretURL);
    console.log(RegisterActions + " endpoint : " + new EndPoint().user_register_post());

    RegisterStore.set_is_loading(true);

    await axios.post(new EndPoint().user_register_post() , user ,{
        headers: {
            'Content-type' : 'application/json'
        }
    }).then(res => {
        console.log(RegisterActions + " get_room_list ", res.data); //+ JSON.stringify(res.data));
        // RoomCreateStore.set_room_list(res.data.groups);
        RegisterStore.set_is_loading(false);
    }).catch(error => {
        console.log(RegisterActions + " error " + error);
    });

    // const api = create({
    //     baseURL: new EndPoint().get_http(),
    //     headers: {
    //         'Content-type' : 'application/json'
    //     }
    //   });

    // api
    //     .post(new EndPoint().user_register_post())
    //     .then((response) => console.log(RegisterActions + " response :  " + response.data))  
    //     .then(console.log);
}

