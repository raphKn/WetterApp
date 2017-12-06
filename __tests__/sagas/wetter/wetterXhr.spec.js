import SagaTester from 'redux-saga-tester';
import { takeEvery } from 'redux-saga';
import { getWetterData } from '../../../src/sagas/wetter/wetterXhr';

const StadtSuche = require('../../../src/modules/stadtSuche');
const Xhr = require('../../../src/networking/xhr');

describe('SagaUnderTest', () => {
    const createSagaTestAction = () => ({
        type: 'START_SAGA_UNDER_TEST_WETTERXHR',
    });

    const sagaUnderTest = function* sagas() {
        yield takeEvery('START_SAGA_UNDER_TEST_WETTERXHR', getWetterData);
    };
    it('does anything', async () => {
        StadtSuche.getStadtSuche = () => 'gesuchteStadt';
        Xhr.getJson = jest.fn();

        const sagaTester = new SagaTester({});
        sagaTester.start(sagaUnderTest);
        sagaTester.dispatch(createSagaTestAction());

        const expectedActions = [createSagaTestAction()];
        expect(sagaTester.getCalledActions()).toEqual(expectedActions);
        expect(Xhr.getJson).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather', {
            appid: '',
            q: 'gesuchteStadt',
        });
    });
});
