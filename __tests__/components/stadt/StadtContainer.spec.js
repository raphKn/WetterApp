import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import StadtContainer from '../../../src/components/stadt/StadtContainer';

const Stadt = require('../../../src/modules/stadt');

describe('Stadt Container', () => {
    it('maps state to props correctly', () => {
        const stadt = {
            stadtName: 'name',
            longitude: 20.01,
            latitude: 20.02,
        };
        const mockStore = configureMockStore()({});
        Stadt.getStadt = () => stadt;
        const component = shallow(<StadtContainer store={mockStore} />);

        expect(component.props().stadt).toBe(stadt);
    });
});
