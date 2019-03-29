import { combineReducers } from 'redux';
import dataReducer from './data';
import uiRecuder from './ui';
import * as NS from '../../namespace';

export default combineReducers<NS.IReduxState>({
    data: dataReducer,
    ui: uiRecuder
});