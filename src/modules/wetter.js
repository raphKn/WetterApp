const SET_WETTER = 'wetterapp/wetter/SET_WETTER';

export default function reducer(state = [], action = {}) {
    switch (action.type) {
        case SET_WETTER:
            return (action.wetter);
        default:
            return state;
    }
}

export function createSetWetter(wetter) {
    return ({
        type: SET_WETTER,
        wetter,
    });
}

export function getWetter(state) {
    return state.wetter;
}