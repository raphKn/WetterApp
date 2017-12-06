import StadtSuche, { createSetStadtSuche, getStadtSuche } from '../../src/modules/stadtSuche';

const gesuchteStadt = 'gesuchteStadt';
describe('StadtSuche', () => {
    it('changes State correctly for createSetLuft', () => {
        expect(StadtSuche('', createSetStadtSuche(gesuchteStadt))).toBe(gesuchteStadt);
    });
    it('returns initial state for no state', () => {
        expect(StadtSuche()).toEqual('');
    });
    it('returns state for unknownAction', () => {
        expect(StadtSuche(gesuchteStadt, { type: 'UNKNOWN_ACTION' })).toBe(gesuchteStadt);
    });
    it('returns state for getStadt', () => {
        expect(getStadtSuche({ stadtSuche: gesuchteStadt })).toBe(gesuchteStadt);
    });
});
