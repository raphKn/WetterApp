import { all, call, put, takeEvery } from 'redux-saga/effects';
import { createSetStadtSuche } from '../../modules/stadtSuche';
import { createSetTemperaturen } from '../../modules/temperaturen';
import { getWetterData } from './wetterXhr';
import { convertWetterData } from './wetterConverter';
import { createSetStadt } from '../../modules/stadt';
import { createSetWetter } from '../../modules/wetter';
import { getImage } from '../../networking/xhr';
import { createSetGlobalError } from '../../modules/globalError';
import { createSetWind } from '../../modules/wind';
import { createSetLuft } from '../../modules/luft';

export const WETTER_SUCHE = 'sagas/wetter-saga/WETTER_SUCHE';
export const CITY_NOT_FOUND_ERROR = 'Die gesuchte Stadt konnte leider nicht gefunden werden.';

export function createWetterSuche(stadt) {
    return { type: WETTER_SUCHE, stadt };
}

function* getIcon(icon) {
    return yield call(getImage, `https://openweathermap.org/img/w/${icon}.png`);
}

function* createWetter(wetterData) {
    const wetter1 = yield wetterData.map(function* any(wetter) {
        const icon = yield getIcon(wetter.icon);
        return {
            ...wetter,
            icon,
        };
    });
    return yield wetter1;
}

export function* wetterSuche(action) {
    yield put(createSetStadtSuche(action.stadt));
    const wetterdata = yield* getWetterData();
    if (!wetterdata.name) {
        yield put(createSetGlobalError(CITY_NOT_FOUND_ERROR));
        return;
    }
    const response = convertWetterData(wetterdata);
    const wetter = yield* createWetter(response.wetter);

    yield all([
        put(createSetWind(response.wind)),
        put(createSetLuft(response.luft)),
        put(createSetTemperaturen(response.temperaturen)),
        put(createSetStadt(response.location)),
        put(createSetWetter(wetter)),
    ]);
}

export default function* sagas() {
    yield takeEvery(WETTER_SUCHE, wetterSuche);
}
