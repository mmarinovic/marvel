import { Epic, ActionsObservable, ofType } from "redux-observable";
import { loadHeroes } from '../actions';
import { switchMap } from 'rxjs/operators';
import * as NS from '../../namespace';

export default function loadHeroesEpic(action$: ActionsObservable<NS.Action>) {
  console.log(arguments);
  return action$.pipe(
      ofType('LOAD_HEROES'),
   
    )
}