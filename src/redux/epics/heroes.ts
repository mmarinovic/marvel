import { Epic, ActionsObservable, ofType } from "redux-observable";
import { loadHeroes } from '../actions';

import * as NS from '../../namespace';

export default function loadHeroesEpic(action$: ActionsObservable<NS.Action>) {
    return action$.pipe(
      ofType('LOAD_HEROES'),
    )
}