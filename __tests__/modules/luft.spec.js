import Luft, { createSetLuft, getLuft } from '../../src/modules/luft';

describe('Luft', () => {
    it('changes State correctly for createSetLuft', () => {
        const luft = 'luftObject';
        expect(Luft('', createSetLuft(luft))).toBe(luft);
    });
    it('returns initial state for no state', () => {
        expect(Luft()).toEqual({});
    });
    it('returns state for unknownAction', () => {
        expect(Luft('luftObject', { type: 'UNKNOWN_ACTION' })).toBe('luftObject');
    });
    it('returns state for getLuft', () => {
        expect(getLuft({ luft: 'luftObject' })).toBe('luftObject');
    });
});
