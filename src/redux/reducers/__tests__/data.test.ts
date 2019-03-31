
import dataReducer from '../data';
import * as NS from '../../../namespace';
import { initial } from '../../initial';
import { IPagedResponse } from '../../../types/common';
import { ICharacter } from '../../../types/models';


describe('data reducer', () => {

    let state = initial.data;

    const spiderMan: ICharacter = { id: 1, imageUrl: 'dummy', name: 'Spider man' };
    const ironMan: ICharacter = { id: 2, imageUrl: 'dummy', name: 'Iron man' };

    it('should return the initial state', () => {
        const newState = dataReducer(undefined, <any>{});
        expect(newState).toEqual(state)
    });

    it('should handle load characters success', () => {
        const loadCharactersSuccessType: NS.ILoadCharactersSuccess['type'] = 'LOAD_CHARACTERS_SUCCESS';
        const loadCharactersSuccessPayload: IPagedResponse<ICharacter[]> = {
            total: 2,
            data: [spiderMan, ironMan]
        }

        const expectedState: NS.IReduxState['data'] = {
            bookmarkedCharacters: [],
            pagedCharacters: loadCharactersSuccessPayload.data,
            totalCharactersCount: loadCharactersSuccessPayload.total
        };

        state = dataReducer(state, {
            type: loadCharactersSuccessType,
            payload: loadCharactersSuccessPayload
        });

        expect(state).toEqual(expectedState);
    });

    it('should handle add to bookmark', () => {
        const addToBookmarksType: NS.IAddToBookmarks['type'] = 'ADD_TO_BOOKMARK';
        const addToBookmarksTypePayload: ICharacter = {...spiderMan, isBookmarked: true};

        const expectedState: NS.IReduxState['data'] = {
            ...state,
            bookmarkedCharacters: [addToBookmarksTypePayload],
            pagedCharacters: [addToBookmarksTypePayload, ironMan]
        };

        state = dataReducer(state, {
            type: addToBookmarksType,
            payload: addToBookmarksTypePayload
        });

        expect(state).toEqual(expectedState);
    });

    it('should handle remove from bookmark', () => {
        const removeFromBookmarksType: NS.IRemoveFromBookmarks['type'] = 'REMOVE_FROM_BOOKMARKS';
        const removeFromBookmarksPayload: number = spiderMan.id;
        const removedFromBookmarksSpiderman = {...spiderMan, isBookmarked: false };

        const expectedState: NS.IReduxState['data'] = {
            ...state,
            bookmarkedCharacters: [],
            pagedCharacters: [removedFromBookmarksSpiderman, ironMan]
        };

        state = dataReducer(state, {
            type: removeFromBookmarksType,
            payload: removeFromBookmarksPayload
        });

        expect(state).toEqual(expectedState);
    });

    it('should handle clear loaded characters', () => {
        const clearLoadedCharactersType: NS.IClearLoadedCharacters['type'] = 'CLEAR_LOADED_CHARACTERS';

        const expectedState: NS.IReduxState['data'] = {
            ...state,
            pagedCharacters: [],
        };

        state = dataReducer(state, {
            type: clearLoadedCharactersType
        });

        expect(state).toEqual(expectedState);
    });

    it('should handle reset loaded characters', () => {
        const resetLoadedCharactersType: NS.IResetLoadedCharacters['type'] = 'RESET_LOADED_CHARACTERS';

        const expectedState: NS.IReduxState['data'] = {
            ...state,
            pagedCharacters: [],
            totalCharactersCount: 0
        };

        state = dataReducer(state, {
            type: resetLoadedCharactersType
        });

        expect(state).toEqual(expectedState);
    });
})