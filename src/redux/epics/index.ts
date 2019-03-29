import { combineEpics } from 'redux-observable';
import heroesEpic from './heroes';
import * as NS from '../../namespace';

export default combineEpics<NS.Action>(
    heroesEpic,
);