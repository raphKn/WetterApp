import * as RootModule from '../../src/modules/index';

describe('IndexModule', () => {
    it('contains all modules', () => {
        const initialState = { globalError: '', luft: {}, stadt: {}, stadtSuche: '', temperaturen: {}, wetter: [], wind: {} };
        expect(RootModule.default()).toEqual(initialState);
    });
});
