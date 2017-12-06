import React from 'react';
import renderer from 'react-test-renderer';
import StadtSuche from '../../../src/components/stadtSuche/StadtSuche';

const doNothing = () => {
};

describe('StadtSuche', () => {
    it('renders correctly in a snapshot', () => {
        const wrapper = renderer.create(
            <StadtSuche onSubmit={doNothing} defaultText="DefaultStadt" />);
        expect(wrapper).toMatchSnapshot();
    });
});
