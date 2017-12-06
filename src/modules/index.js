import { combineReducers } from 'redux';
import temperaturen from './temperaturen';
import stadtSuche from './stadtSuche';
import stadt from './stadt';
import wetter from './wetter';
import globalError from './globalError';
import wind from './wind';
import luft from './luft';

const reducers = {
    temperaturen,
    stadt,
    stadtSuche,
    wetter,
    wind,
    luft,
    globalError,
};

export default combineReducers(reducers);
