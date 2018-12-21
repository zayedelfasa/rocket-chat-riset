import { LoginStore } from './LoginStore';
import EndPoint from '../EndPoint/EndPointClass';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import String_local_storage from '../../configs/String_local_storage';
const LoginActions = "LoginActions";

export async function fetch_login(username, password) {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.post(new EndPoint().get_login(), {
        user: username,
        password: password
    }, axiosConfig).then(async res => {
        console.log(LoginActions + " fetch_login : ", JSON.stringify(res.data));
        if (res.data.status == "success") {
            await AsyncStorage.setItem(String_local_storage.is_login, "login");
            await AsyncStorage.setItem(String_local_storage.user_login_id, res.data.data.userId);
            await AsyncStorage.setItem(String_local_storage.user_login_token, res.data.data.authToken);
            await AsyncStorage.setItem(String_local_storage.user_name, res.data.data.me.name);
            await AsyncStorage.setItem(String_local_storage.user_password, password);
            await LoginStore.set_status_success_login(true);
            // console.log("Set status login on login actions : ", LoginStore.get_status_success_login());
        }
    });
}