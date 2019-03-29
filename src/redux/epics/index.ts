import { combineEpics } from 'redux-observable';
import heroesEpic from './heroes';

import * as NS from '../../namespace';
import * as APP from '../../types/app';

export default combineEpics<NS.Action, NS.Action, NS.IReduxState, APP.IDependencies>(
    heroesEpic,
);