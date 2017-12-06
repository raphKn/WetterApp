import React from 'react';
import renderer from 'react-test-renderer';
import WetterEntry from '../../../src/components/wetter/WetterEntry';

const sonnewetter = {
    icon: 'SonnenIcon',
    description: 'strahlender Sonnenschein',
    main: 'Sonne',
};
jest.mock('../../../src/components/wetter/WetterEntryContainer');

describe('WetterEntry', () => {
    it('renders  correctly in a snapshot', () => {
        const wrapper = renderer.create(
            <WetterEntry wetter={sonnewetter} />);
        expect(wrapper).toMatchSnapshot();
    });
});
