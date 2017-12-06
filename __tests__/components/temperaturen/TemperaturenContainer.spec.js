import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import TemperaturenContainer from '../../../src/components/temperaturen/TemperaturenContainer';

const Temperaturen = require('../../../src/modules/temperaturen');

describe('Temperaturen Container', () => {
    it('maps state to props correctly', () => {
        const temperaturen = { temperatur: '12', mindestTemperatur: '10', maximaleTemperatur: '14' };
        const mockStore = configureMockStore()({});
        Temperaturen.getTemperaturen = () => temperaturen;
        const component = shallow(<TemperaturenContainer store={mockStore} />);

        expect(component.props().temperaturen).toBe(temperaturen);
    });
});
