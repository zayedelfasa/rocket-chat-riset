import * as remx from 'remx';
remx.registerLoggerForDebug(console.log);

const initialState = {
    is_loading: null,
    room_list : null
}

const state = remx.state(initialState);

const getters = remx.getters({
    get_is_loading() {
        return state.is_loading;
    },
    get_room_list() {
        return state.room_list;
    }
});

const setters = remx.setters({
    set_is_loading(is_loading) {
        state.is_loading = is_loading;
    },
    set_room_list(room_list) {
        state.room_list = room_list;
    }
});

export const HomeStore = {
    ...setters, 
    ...getters
}