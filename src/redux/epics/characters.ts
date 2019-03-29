import { ActionsObservable, ofType } from "redux-observable";
import { loadCharactersSuccess, loadCharactersFailed } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as NS from '../../namespace';
import * as APP from '../../types/app';
import { ILoadCharactersRequest } from "../../types/requests";
import { from, of } from "rxjs";

export default function loadCharactersEpic(action$: ActionsObservable<NS.Action>, _: any, { marvelApi }: APP.IDependencies) {
  return action$.pipe(
    ofType('LOAD_CHARACTERS'),
    switchMap(({ payload }) => 
      from(marvelApi.loadCharacters(payload as ILoadCharactersRequest)).pipe(
          map((response: any) =>{
            console.log(response)
            return loadCharactersSuccess(response);
          }),
          catchError((error: any) => of(loadCharactersFailed(error)))
        )
    ),
  )
}