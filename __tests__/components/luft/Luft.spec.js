import React from 'react';
import renderer from 'react-test-renderer';
import Luft from '../../../src/components/luft/Luft';

describe('Luft', () => {
    it('renders low bewoelkung correctly in a snapshot', () => {
        const luft = { bewoelkung: 30, luftdruck: 1.012, luftfeuchtigkeit: 40 };
        const wrapper = renderer.create(
            <Luft luft={luft} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders high bewpelkung correctly in a snapshot', () => {
        const luft = { bewoelkung: 70, luftdruck: 1.012, luftfeuchtigkeit: 40 };
        const wrapper = renderer.create(
            <Luft luft={luft} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders nothing for no luft in a snapshot', () => {
        const wrapper = renderer.create(
            <Luft luft={{}} />);
        expect(wrapper).toMatchSnapshot();
    });
});
