import SagaTester from 'redux-saga-tester';
import sagaUnderTest, { CITY_NOT_FOUND_ERROR, createWetterSuche, wetterSuche } from '../../../src/sagas/wetter/wetterSaga';
import { createSetGlobalError } from '../../../src/modules/globalError';
import { createSetStadtSuche } from '../../../src/modules/stadtSuche';
import { createSetWind } from '../../../src/modules/wind';
import { createSetTemperaturen } from '../../../src/modules/temperaturen';
import { createSetStadt } from '../../../src/modules/stadt';
import { createSetLuft } from '../../../src/modules/luft';
import { createSetWetter } from '../../../src/modules/wetter';

const WetterConverter = require('../../../src/sagas/wetter/wetterConverter');
const Xhr = require('../../../src/networking/xhr');
const WetterXhr = require('../../../src/sagas/wetter/wetterXhr');

Xhr.getJson = jest.fn();
Xhr.getImage = function* unnamed() {
    return yield 'mockedIcon';
};

let getWetterDataMock;
WetterXhr.getWetterData = function* any() {
    return yield getWetterDataMock;
};
const wetter = [{
    description: 'beschreibung',
    icon: '123',
}];
const wind = 'windObj';
const luft = 'luftObj';
const temperaturen = 'temperaturenObj';
const location = 'locationObj';
WetterConverter.convertWetterData = jest.fn(() => ({
    wetter,
    wind,
    luft,
    temperaturen,
    location,
}));

describe('wetterSaga', () => {
    it('calls defined function on every expected action', () => {
        const expectedArgsList = [
            [createWetterSuche().type, wetterSuche],
        ];
        const sagaGenerator = sagaUnderTest();
        // eslint-disable-next-line
        for (const expectedArgs of expectedArgsList) {
            const next = sagaGenerator.next();
            expect(next.value.FORK).toBeDefined();
            expect(next.value.FORK.args).toEqual(expectedArgs);
        }
    });

    it('handles error for unknown city correctly', async () => {
        getWetterDataMock = {};
        const sagaTester = new SagaTester({});
        sagaTester.start(sagaUnderTest);
        const actionUnderTest = createWetterSuche('gesuchteStadt');
        sagaTester.dispatch(actionUnderTest);

        const expectedActions = [actionUnderTest,
            createSetStadtSuche('gesuchteStadt'),
            createSetGlobalError(CITY_NOT_FOUND_ERROR)];
        expect(sagaTester.getCalledActions()).toEqual(expectedActions);
    });

    it('handles suceessful fetch correctly', async () => {
        getWetterDataMock = { name: 'beispielStadt' };
        const sagaTester = new SagaTester({});
        sagaTester.start(sagaUnderTest);
        const actionUnderTest = createWetterSuche('gesuchteStadt');
        sagaTester.dispatch(actionUnderTest);

        const wetterToWriteToState = [{ ...wetter[0], icon: 'mockedIcon' }];
        const expectedActions = [actionUnderTest,
            createSetStadtSuche('gesuchteStadt'),
            createSetWind(wind),
            createSetLuft(luft),
            createSetTemperaturen(temperaturen),
            createSetStadt(location),
            createSetWetter(wetterToWriteToState),
        ];
        expect(sagaTester.getCalledActions()).toEqual(expectedActions);
    });
});
