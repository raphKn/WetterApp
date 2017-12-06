import Wind, { createSetWind, getWind } from '../../src/modules/wind';

const wind = 'windObject';
describe('Wind', () => {
    it('changes State correctly for createSetLuft', () => {
        expect(Wind({}, createSetWind(wind))).toBe(wind);
    });
    it('returns initial state for no state', () => {
        expect(Wind()).toEqual({});
    });
    it('returns state for unknownAction', () => {
        expect(Wind(wind, { type: 'UNKNOWN_ACTION' })).toBe(wind);
    });
    it('returns state for getStadt', () => {
        expect(getWind({ wind })).toBe(wind);
    });
});
