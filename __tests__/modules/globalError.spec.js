import GlobalError, { createResetGlobalError, createSetGlobalError, getGlobalErrorMessage } from '../../src/modules/globalError';

describe('GlobalError', () => {
    it('changes State correctly for createSetGlobalError', () => {
        const message = 'errorText';
        expect(GlobalError('', createSetGlobalError(message))).toBe(message);
    });
    it('changes State correctly for createResetGlobalError', () => {
        expect(GlobalError('initialMessage', createResetGlobalError())).toBe('');
    });
    it('returns initial state for no state', () => {
        expect(GlobalError()).toBe('');
    });
    it('returns state for unknownAction', () => {
        expect(GlobalError('initialMessage', { type: 'UNKNOWN_ACTION' })).toBe('initialMessage');
    });
    it('returns state for get state for unknownAction', () => {
        expect(getGlobalErrorMessage({ globalError: 'message' })).toBe('message');
    });
});
