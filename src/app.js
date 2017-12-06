/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import CustomPage from './components/common/CustomPage';
import StadtSuche from './components/stadtSuche/StadtSucheContainer';
import TemperaturenContainer from './components/temperaturen/TemperaturenContainer';
import StadtContainer from './components/stadt/StadtContainer';
import WetterContainer from './components/wetter/WetterContainer';
import GlobalErrorContainer from './components/error/GlobalErrorContainer';
import WindContainer from './components/wind/WindContainer';
import LuftContainer from './components/luft/LuftContainer';

class App extends Component {
    render() {
        return (
            <CustomPage>
                <StadtSuche />
                <StadtContainer />
                <WindContainer />
                <TemperaturenContainer />
                <LuftContainer />
                <WetterContainer />
                <GlobalErrorContainer />
            </CustomPage>
        );
    }
}

export default App;
