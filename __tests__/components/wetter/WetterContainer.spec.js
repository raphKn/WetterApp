import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import WetterContainer from '../../../src/components/wetter/WetterContainer';

const Wetter = require('../../../src/modules/wetter');

const regenwetter = {
    icon: 'RegenIcon',
    description: 'Nieselregen',
    main: 'Regen',
};

describe('Wetter Container', () => {
    it('maps state to props correctly', () => {
        const mockStore = configureMockStore()({});
        Wetter.getWetter = () => [regenwetter];
        const component = shallow(<WetterContainer store={mockStore} />);

        expect(component.props().wetter).toEqual([regenwetter]);
    });
});
