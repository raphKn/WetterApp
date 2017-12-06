const SET_TEMPERATUREN = 'wetterapp/wetter/SET_TEMPERATUREN';

export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case SET_TEMPERATUREN:
            return (action.temperaturen);
        default:
            return state;
    }
}

export function createSetTemperaturen(temperaturen) {
    return ({
        type: SET_TEMPERATUREN,
        temperaturen,
    });
}

export function getTemperaturen(state) {
    return state.temperaturen;
}
