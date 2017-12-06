import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import LuftContainer from '../../../src/components/luft/LuftContainer';

const Luft = require('../../../src/modules/luft');

describe('Luft Container', () => {
    it('maps state to props correctly', () => {
        const luft = { bewoelkung: 30, luftdruck: 1.012, luftfeuchtigkeit: 40 };
        const mockStore = configureMockStore()({});
        Luft.getLuft = () => luft;
        const component = shallow(<LuftContainer store={mockStore} />);

        expect(component.props().luft).toBe(luft);
    });
});
