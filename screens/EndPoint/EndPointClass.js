const endPoint = {
    http : "https://rnd.clouds.id:3001",
    // http: "http://172.16.6.46:3000",
    ws : "ws://rnd.clouds.id:3000/websocket"
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

    channel_group_invite_post() {
      return endPoint.http + "/api/v1/groups.invite";
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

    socket_ping_rocketchat() {
        return JSON.stringify({ "msg": "ping" });
    }
}