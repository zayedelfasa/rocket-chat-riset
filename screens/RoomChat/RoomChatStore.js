import * as remx from 'remx';
remx.registerLoggerForDebug(console.log);

const initialState = {
    username: null,
    password: null,
    room_id: null,
    status_success_create_room: null,
    message: {},
}

const state = remx.state(initialState);

const setters = remx.setters({
    set_username(username) {
        state.username = username;
    },
    set_password(password) {
        state.password = password;
    },
    set_room_id(room_id) {
        state.room_id = room_id;
    },
    set_status_success_create_room(status_success_create_room) {
        state.status_success_create_room = status_success_create_room;
    },
    set_message(message) {
        state.message = message;
    }
});

const getters = remx.getters({
    get_username() {
        return state.username;
    },
    get_password() {
        return state.password;
    },
    get_room_id() {
        state.room_id;
    },
    get_status_success_create_room() {
        state.status_success_create_room;
    },
    get_message() {
        return state.message;
    }
});

export const RoomChatStore = {
    ...setters, 
    ...getters
}

