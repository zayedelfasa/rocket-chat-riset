import * as remx from 'remx';
remx.registerLoggerForDebug(console.log);

const initialState = {
    is_loading: null,
    response: null,
    response_all_user: null
}

const state = remx.state(initialState);

const setters = remx.setters({
    set_is_loading(is_loading) {
        state.is_loading = is_loading;
    },
    set_response(response) {
        state.response = response;
    },
    set_response_all_user(response_all_user) {
        state.response_all_user = response_all_user;
    }
});

const getters = remx.getters({
    get_is_loading() {
        return state.is_loading;
    },
    get_response() {
        return state.response;
    },
    get_response_all_user() {
        return state.response_all_user;
    }
});

export const InviteUserStore = {
    ...setters, 
    ...getters
}