import React from 'react';
import renderer from 'react-test-renderer';
import Temperatur from '../../../src/components/temperaturen/Temperatur';

describe('Temperatur', () => {
    it('renders maxTemp correctly in a snapshot', () => {
        const wrapper = renderer.create(
            <Temperatur value="12" isMaxTemp />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders normal Temp correctly in a snapshot', () => {
        const wrapper = renderer.create(
            <Temperatur value="12" />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders min Temp correctly in a snapshot', () => {
        const wrapper = renderer.create(
            <Temperatur value="12" isMinTemp />);
        expect(wrapper).toMatchSnapshot();
    });
});
