const SET_LUFT = 'wetterApp/luft/SET_LUFT';

export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case SET_LUFT:
            return (action.data);
        default:
            return state;
    }
}

export function createSetLuft(data) {
    return ({
        type: SET_LUFT,
        data,
    });
}

export function getLuft(state) {
    return state.luft;
}
