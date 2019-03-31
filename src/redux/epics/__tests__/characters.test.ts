import * as NS from '../../../namespace';

import loadCharactersEpic from '../';
import { TestScheduler } from 'rxjs/testing';
import { IPagedResponse } from '../../../types/common';
import { ICharacter } from '../../../types/models';

describe('charcters epic', () => {

    const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
    });

    it('should successfuly load characters', () => {
        
        const mockedMarvelApiResponse: IPagedResponse<ICharacter[]> = {
            total: 0,
            data: []
        }

        const loadCharactersActionType: NS.ILoadCharacters['type'] = 'LOAD_CHARACTERS';
        const loadCharactersSuccessAction: NS.ILoadCharactersSuccess = {
            type: 'LOAD_CHARACTERS_SUCCESS',
            payload: mockedMarvelApiResponse
        }

        testScheduler.run(({ hot, cold, expectObservable }) => {
            const action$:any = hot('-a', {
              a: { type: loadCharactersActionType, payload: <any>{} }
            });
            const state$: any = null;
            const dependencies: any = {
              marvelApi: {
                  loadCharacters: (_: any) => cold('--a', {
                    a: mockedMarvelApiResponse
                  })
              }
            };
          
            const output$ = loadCharactersEpic(action$, state$, dependencies);
            
            expectObservable(output$).toBe('---a', {
              a: loadCharactersSuccessAction
            });
          });
    });
})