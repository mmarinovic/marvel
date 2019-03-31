import uiReducer from '../ui';
import * as NS from '../../../namespace';
import { initial } from '../../initial';

describe('ui reducer', () => {

    let state = initial.ui;

    it('should return the initial state', () => {
        const newState = uiReducer(undefined, <any>{});
        expect(newState).toEqual(state)
    });

    it('should handle set search term', () => {
        const setSearchTermType: NS.ISetSearchTerm['type'] = 'SET_SEARCH_TERM';
        const setSearchTermPayload: string = 'Spider-Man';

        const expectedState: NS.IReduxState['ui'] = {
            ...state,
            searchTerm: setSearchTermPayload
        };

        state = uiReducer(state, {
            type: setSearchTermType,
            payload: setSearchTermPayload
        });

        expect(state).toEqual(expectedState);
    });

    it('should handle load characters', () => {
        const loadCharactersType: NS.ILoadCharacters['type'] = 'LOAD_CHARACTERS';

        const expectedState: NS.IReduxState['ui'] = {
            ...state,
            isLoading: true
        };

        state = uiReducer(state, {
            type: loadCharactersType,
            payload: <any>{}
        });

        expect(state).toEqual(expectedState);
    });

    it('should handle load characters success', () => {
        const loadCharactersSuccessType: NS.ILoadCharactersSuccess['type'] = 'LOAD_CHARACTERS_SUCCESS';

        const expectedState: NS.IReduxState['ui'] = {
            ...state,
            isLoading: false
        };

        state = uiReducer(state, {
            type: loadCharactersSuccessType,
            payload: <any>{}
        });

        expect(state).toEqual(expectedState);
    });

    it('should handle load characters failed', () => {
        const loadCharactersFailedType: NS.ILoadCharactersFailed['type'] = 'LOAD_CHARACTERS_FAILED';

        const expectedState: NS.IReduxState['ui'] = {
            ...state,
            isLoading: false
        };

        state = uiReducer(state, {
            type: loadCharactersFailedType,
            payload: <any>{}
        });

        expect(state).toEqual(expectedState);
    });
})