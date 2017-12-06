const SET_ERROR_MESSAGE = 'wetterapp/globalError/SET_ERROR_MESSAGE';

export default function reducer(state = '', action = {}) {
    switch (action.type) {
        case SET_ERROR_MESSAGE:
            return (action.message);
        default:
            return state;
    }
}

export function createSetGlobalError(message) {
    return ({
        type: SET_ERROR_MESSAGE,
        message,
    });
}

export function createResetGlobalError() {
    return createSetGlobalError('');
}

export function getGlobalErrorMessage(state) {
    return state.globalError;
}
