import Stadt, { createSetStadt, getStadt } from '../../src/modules/stadt';

const stadt = 'stadtObject';
describe('Stadt', () => {
    it('changes State correctly for createSetLuft', () => {
        expect(Stadt('', createSetStadt(stadt))).toBe(stadt);
    });
    it('returns initial state for no state', () => {
        expect(Stadt()).toEqual({});
    });
    it('returns state for unknownAction', () => {
        expect(Stadt(stadt, { type: 'UNKNOWN_ACTION' })).toBe(stadt);
    });
    it('returns state for getStadt', () => {
        expect(getStadt({ stadt, })).toBe(stadt);
    });
});
