import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import StadtSucheContainer from '../../../src/components/stadtSuche/StadtSucheContainer';
import { createWetterSuche } from '../../../src/sagas/wetter/wetterSaga';

const StadtSuche = require('../../../src/modules/stadtSuche');

const stadt = 'gesuchteStadt';

describe('StadtSuche Container', () => {
    it('maps state to props correctly', () => {
        const store = configureMockStore()({});
        StadtSuche.getStadtSuche = () => stadt;

        const component = shallow(<StadtSucheContainer store={store} />);

        expect(component.props().defaultText).toBe(stadt);
    });
    it('maps dispatch to props correctly', () => {
        const store = configureMockStore()({});
        StadtSuche.getStadtSuche = () => stadt;

        const component = shallow(<StadtSucheContainer store={store} />);

        component.props().onSubmit(stadt);
        expect(store.getActions()).toEqual([createWetterSuche(stadt)]);
    });
});
