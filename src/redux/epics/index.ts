import { combineEpics } from 'redux-observable';
import { AnyAction } from 'redux';

import charactersEpic from './characters';

import * as NS from '../../namespace';
import * as APP from '../../types/app';

export default combineEpics<AnyAction, AnyAction, NS.IReduxState, APP.IDependencies>(
    charactersEpic,
);