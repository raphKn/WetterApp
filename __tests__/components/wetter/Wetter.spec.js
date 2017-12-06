import React from 'react';
import renderer from 'react-test-renderer';
import Wetter from '../../../src/components/wetter/Wetter';

const regenwetter = {
    icon: 'RegenIcon',
    description: 'Nieselregen',
    main: 'Regen',
};
const sonnewetter = {
    icon: 'SonnenIcon',
    description: 'strahlender Sonnenschein',
    main: 'Sonne',
};
jest.mock('../../../src/components/wetter/WetterEntryContainer');

describe('Wetter', () => {
    it('renders two wetter correctly in a snapshot', () => {
        const wrapper = renderer.create(
            <Wetter wetter={[regenwetter, sonnewetter]} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders nothing for no wetter in a snapshot', () => {
        const wrapper = renderer.create(
            <Wetter wetter={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});
