import React from 'react';
import renderer from 'react-test-renderer';
import Wind from '../../../src/components/wind/Wind';

describe('Wind', () => {
    it('renders strong wind correctly in a snapshot', () => {
        const wind = {
            bezeichnung: 'Ost',
            geschwindigkeit: 5.2,
            imageRotation: 90,
        };
        const wrapper = renderer.create(
            <Wind wind={wind} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders weak wind correctly in a snapshot', () => {
        const wind = {
            geschwindigkeit: 0.2,
        };
        const wrapper = renderer.create(
            <Wind wind={wind} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders nothing for no wind in a snapshot', () => {
        const wrapper = renderer.create(
            <Wind wind={{}} />);
        expect(wrapper).toMatchSnapshot();
    });
});
