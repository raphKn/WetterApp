import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import WindContainer from '../../../src/components/wind/WindContainer';

const Wind = require('../../../src/modules/wind');

describe('Wind Container', () => {
    it('maps state to props correctly', () => {
        const wind = {
            bezeichnung: 'Ost',
            geschwindigkeit: 5.2,
            imageRotation: 90,
        };
        const mockStore = configureMockStore()({});
        Wind.getWind = () => wind;
        const component = shallow(<WindContainer store={mockStore} />);

        expect(component.props().wind).toBe(wind);
    });
});
