import React from 'react';
import renderer from 'react-test-renderer';
import Temperaturen from '../../../src/components/temperaturen/Temperaturen';

describe('Temperaturen', () => {
    it('renders correctly in a snapshot', () => {
        const temperaturen = { temperatur: '12', mindestTemperatur: '10', maximaleTemperatur: '14' };
        const wrapper = renderer.create(
            <Temperaturen temperaturen={temperaturen} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders null for no temperaturen', () => {
        const temperaturen = {};
        const wrapper = renderer.create(
            <Temperaturen temperaturen={temperaturen} />);
        expect(wrapper).toMatchSnapshot();
    });
});
