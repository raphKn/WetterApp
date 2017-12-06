import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import GlobalErrorContainer from '../../../src/components/error/GlobalErrorContainer';
import { createResetGlobalError } from '../../../src/modules/globalError';

const GlobalError = require('../../../src/modules/globalError');

describe('GlobalError Container', () => {
    it('maps state to props correctly', () => {
        GlobalError.getGlobalErrorMessage = () => 'errorMessage';
        const store = configureMockStore()({});
        const component = shallow(<GlobalErrorContainer store={store} />);

        expect(component.props().message).toBe('errorMessage');
    });
    it('maps dispatch to props correctly', () => {
        const store = configureMockStore()({});
        const component = shallow(<GlobalErrorContainer store={store} />);
        component.props().cancelError();
        expect(store.getActions()).toEqual([createResetGlobalError()]);
    });
});
