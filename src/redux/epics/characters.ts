import { ActionsObservable, ofType } from "redux-observable";
import { loadCharactersSuccess, loadCharactersFailed } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as NS from '../../namespace';
import * as APP from '../../types/app';
import { ILoadCharactersRequest } from "../../types/requests";
import { from, of } from "rxjs";
import { AnyAction } from "redux";

export default function loadCharactersEpic(action$: ActionsObservable<AnyAction>, _: any, { marvelApi }: APP.IDependencies) {
  const loadCharactersType: NS.ILoadCharacters['type'] = 'LOAD_CHARACTERS';
  
  return action$.pipe(
    ofType(loadCharactersType),
    switchMap(({ payload }) => 
      from(marvelApi.loadCharacters(payload as ILoadCharactersRequest)).pipe(
          map((response: any) =>{
            return loadCharactersSuccess(response);
          }),
          catchError((error: any) => of(loadCharactersFailed(error)))
        )
    ),
  )
}