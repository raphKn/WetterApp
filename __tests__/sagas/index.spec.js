import rootSaga from '../../src/sagas/index';
import * as wetterSaga from '../../src/sagas/wetter/wetterSaga';

const mocked = jest.fn(() => 'wetterSaga');
wetterSaga.default = mocked;

describe('IndexSaga', () => {
    it('containsWetterSaga', () => {
        expect(mocked).toHaveBeenCalledTimes(0);
        expect(rootSaga().next().value).toContain('wetterSaga');
        expect(mocked).toHaveBeenCalledTimes(1);
    });
});
