const SET_STADT = 'wetterapp/stadt/SET_STADT';

export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case SET_STADT:
            return (action.data);
        default:
            return state;
    }
}

export function createSetStadt(data) {
    return ({
        type: SET_STADT,
        data,
    });
}

export function getStadt(state) {
    return state.stadt;
}
