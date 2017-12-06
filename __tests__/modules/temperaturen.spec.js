import Temperaturen, { createSetTemperaturen, getTemperaturen } from '../../src/modules/temperaturen';

const temperaturen = 'temperaturenObject';
describe('Temperaturen', () => {
    it('changes State correctly for createSetLuft', () => {
        expect(Temperaturen({}, createSetTemperaturen(temperaturen))).toBe(temperaturen);
    });
    it('returns initial state for no state', () => {
        expect(Temperaturen()).toEqual({});
    });
    it('returns state for unknownAction', () => {
        expect(Temperaturen(temperaturen, { type: 'UNKNOWN_ACTION' })).toBe(temperaturen);
    });
    it('returns state for getStadt', () => {
        expect(getTemperaturen({ temperaturen })).toBe(temperaturen);
    });
});
