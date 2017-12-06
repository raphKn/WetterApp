const SET_STADT_SUCHE = 'WetterApp/stadtSuche/SET_STADT_SUCHE';

const initialState = '';

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_STADT_SUCHE:
            return action.stadt;
        default:
            return state;
    }
}

export function getStadtSuche(state) {
    return state.stadtSuche;
}

export function createSetStadtSuche(stadt) {
    return {
        type: SET_STADT_SUCHE,
        stadt,
    };
}
