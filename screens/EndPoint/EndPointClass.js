const endPoint = {
    http : "https://172.16.6.46:3000:3001",
    // http: "http://172.16.6.46:3000",
    ws : "ws://172.16.6.46:3000/websocket"
}

export default class EndPointClass {

    get_http() {
        return endPoint.http;
    }

    get_login() {
        return endPoint.http + "/api/v1/login";   
    }

    channel_create_post() {
        // https://rocket.chat/docs/developer-guides/rest-api/channels/create/
        return endPoint.http + "/api/v1/channels.create";
    }

    channel_list_get() {
        // https://rocket.chat/docs/developer-guides/rest-api/groups/list/
        return endPoint.http + "/api/v1/groups.list";
        // return "/api/v1/groups.list";
    }

    channel_create_room_post() {
        return endPoint.http + "/api/v1/groups.create";
    }

    channel_invite_user_post() {
        return endPoint.http + "/api/v1/groups.invite";
    }

    channel_user_list_get() {
        return endPoint.http + "/api/v1/users.list";
    }

    channel_group_user_list_get(room_id) {
        return endPoint.http + "/api/v1/groups.members?roomId="+room_id;
    }

    user_register_post() {
        return endPoint.http + "/api/v1/users.register";
    }

    websocket_link() {
        return endPoint.ws;
    }

    socket_connect_rocketchat() {
        return JSON.stringify({ "msg": "connect", "version": "1", "support": ["1"] });
    }

    socket_login_rocketchat(username, password) {
        return JSON.stringify({ "msg": "method", "method": "login", "id": "42", "params": [{ "user": { "username": username }, "password": password }]});
    }

    socket_login_with_auth(auth_token) {
        return JSON.stringify({
            "msg": "method",
            "method": "login",
            "id": "42",
            "params": [
                { "resume": auth_token }
            ]
        });
    }

    socket_ping_rocketchat() {
        return JSON.stringify({ "msg": "ping" });
    }

    socket_stream_room(id, params) {
        return JSON.stringify({"msg": "sub","id": id,"name": "stream-room-messages","params":params});
    }

    socket_send_chat(id, room_group_id, message) {
        return JSON.stringify({"msg": "method","method": "sendMessage","id": "42","params": [{"_id":id,"rid": room_group_id,"msg": message}]});
    }

    socket_history_chat(room_id, gettime_start, gettime_end, count_load_message) {
        return JSON.stringify({
            "msg": "method",
            "method": "loadHistory",
            "id": "42",
            "params": [ room_id , { "$date": gettime_start }, count_load_message, { "$date": gettime_end } ]
        });
    }

    socket_history_latest_chat(room_id, gettime_end, count_load_message) {
        return JSON.stringify({
            "msg": "method",
            "method": "loadHistory",
            "id": "42",
            "params": [ room_id , null, count_load_message, { "$date": gettime_end } ]
        });
    } 
}
