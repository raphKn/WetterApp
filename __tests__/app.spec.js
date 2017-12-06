import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../src/app';
import StadtSucheContainer from '../src/components/stadtSuche/StadtSucheContainer';
import StadtContainer from '../src/components/stadt/StadtContainer';
import WindContainer from '../src/components/wind/WindContainer';
import TemperaturenContainer from '../src/components/temperaturen/TemperaturenContainer';
import LuftContainer from '../src/components/luft/LuftContainer';
import WetterContainer from '../src/components/wetter/WetterContainer';
import GlobalErrorContainer from '../src/components/error/GlobalErrorContainer';

jest.mock('../src/components/stadtSuche/StadtSucheContainer');
jest.mock('../src/components/stadt/StadtContainer');
jest.mock('../src/components/wind/WindContainer');
jest.mock('../src/components/temperaturen/TemperaturenContainer');
jest.mock('../src/components/luft/LuftContainer');
jest.mock('../src/components/wetter/WetterContainer');
jest.mock('../src/components/error/GlobalErrorContainer');

describe('Component', () => {
    it('renders in a snapshot', () => {
        const wrapper = renderer.create(
            <App />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
    it('renders all subinfos', () => {
        const wrapper = shallow(
            <App />);
        expect(wrapper.find(StadtSucheContainer).length).toBe(1);
        expect(wrapper.find(StadtContainer).length).toBe(1);
        expect(wrapper.find(WindContainer).length).toBe(1);
        expect(wrapper.find(TemperaturenContainer).length).toBe(1);
        expect(wrapper.find(LuftContainer).length).toBe(1);
        expect(wrapper.find(WetterContainer).length).toBe(1);
        expect(wrapper.find(GlobalErrorContainer).length).toBe(1);
    });
});
