import { call, select } from 'redux-saga/effects';
import { getJson } from '../../networking/xhr';
import { getStadtSuche } from '../../modules/stadtSuche';

export function* getWetterData() {
    const stadt = yield select(getStadtSuche);
    return yield call(getJson, 'https://api.openweathermap.org/data/2.5/weather', {
        q: stadt,
        appid: '',
    });
}
