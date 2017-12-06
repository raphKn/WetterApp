import React from 'react';
import renderer from 'react-test-renderer';
import Stadt from '../../../src/components/stadt/Stadt';

describe('Stadt', () => {
    const stadt = {
        stadtName: 'name',
        longitude: 20.01,
        latitude: 20.02,
    };
    it('renders maxTemp correctly in a snapshot', () => {
        const wrapper = renderer.create(
            <Stadt stadt={stadt} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders nothing for no stadt in a snapshot', () => {
        const wrapper = renderer.create(
            <Stadt stadt={{}} />);
        expect(wrapper).toMatchSnapshot();
    });
});
