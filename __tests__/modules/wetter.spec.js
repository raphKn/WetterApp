import Wetter, { createSetWetter, getWetter } from '../../src/modules/wetter';

const wetter = 'wetterArrayObject';
describe('Wetter', () => {
    it('changes State correctly for createSetLuft', () => {
        expect(Wetter([], createSetWetter(wetter))).toBe(wetter);
    });
    it('returns initial state for no state', () => {
        expect(Wetter()).toEqual([]);
    });
    it('returns state for unknownAction', () => {
        expect(Wetter(wetter, { type: 'UNKNOWN_ACTION' })).toBe(wetter);
    });
    it('returns state for getStadt', () => {
        expect(getWetter({ wetter })).toBe(wetter);
    });
});
