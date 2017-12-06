const SET_WIND = 'wetterApp/wind/SET_WIND';

export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case SET_WIND:
            return (action.data);
        default:
            return state;
    }
}

export function createSetWind(data) {
    return ({
        type: SET_WIND,
        data,
    });
}

export function getWind(state) {
    return state.wind;
}
