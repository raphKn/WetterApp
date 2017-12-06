import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import WetterEntryContainer from '../../../src/components/wetter/WetterEntryContainer';

const regenwetter = {
    icon: 'RegenIcon',
    description: 'Nieselregen',
    main: 'Regen',
};
describe('WetterEntry Container', () => {
    it('maps state to props correctly', () => {
        const store = configureMockStore()({});
        const component = shallow(<WetterEntryContainer store={store} wetter={regenwetter} />);

        expect(component.props().wetter).toBe(regenwetter);
    });
});
