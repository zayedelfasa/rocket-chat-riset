import * as remx from 'remx';
remx.registerLoggerForDebug(console.log);

const initialState = {
    message: {},
}

const state = remx.state(initialState);

const setters = remx.setters({
    set_message(message) {
        state.message = message;
    }
});

const getters = remx.getters({
    get_message() {
        return state.message;
    }
});

export const MyChatStore = {
    ...setters, 
    ...getters,
}

