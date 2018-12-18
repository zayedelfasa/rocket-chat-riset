import * as remx from 'remx';
remx.registerLoggerForDebug(console.log);

const initialState = {
    username: null,
    password: null,
    status_success_create_room: null
}

const state = remx.state(initialState);

const getters = remx.getters({
    get_username() {
        return state.username;
    },
    get_password() {
        return state.password;
    },
    get_status_success_create_room() {
        return state.status_success_create_room;
    }
});

const setters = remx.setters({
    set_username(username) {
        state.username = username;
    },
    set_password(password) {
        state.password = password;
    },
    set_status_success_create_room(status_success_create_room) {
        state.status_success_create_room = status_success_create_room;
    }
});

export const RoomCreateStore = {
    ...setters, 
    ...getters
}