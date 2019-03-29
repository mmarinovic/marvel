import { combineEpics } from 'redux-observable';
import charactersEpic from './characters';

import * as NS from '../../namespace';
import * as APP from '../../types/app';

export default combineEpics<NS.Action, any, NS.IReduxState, APP.IDependencies>(
    charactersEpic,
);