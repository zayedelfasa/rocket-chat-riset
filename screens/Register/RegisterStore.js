import * as remx from 'remx';
remx.registerLoggerForDebug(console.log);

const initialState = {
    is_loading: null,
    response: null
}

const state = remx.state(initialState);

const setters = remx.setters({
    set_is_loading(is_loading) {
        state.is_loading = is_loading;
    },
    set_response(response) {
        state.response = response;
    }
});

const getters = remx.getters({
    get_is_loading() {
        return state.is_loading;
    },
    get_response() {
        return state.response;
    }
});

export const RegisterStore = {
    ...setters, 
    ...getters
}