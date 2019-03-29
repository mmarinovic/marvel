import * as NS from '../namespace';
import { createSelector } from 'reselect';

export function selectPagedCharacters(state: NS.IReduxState){
    return state.data.pagedCharacters;
}

export function selectBookmarkedCharacters(state: NS.IReduxState){
    return state.data.bookmarkedCharacters;
}

export function selectTotalCharactersCount(state: NS.IReduxState){
    return state.data.totalCharactersCount;
}

export function selectSearchTerm(state: NS.IReduxState){
    return state.ui.searchTerm;
}

export const selectCharactersToDisplay = createSelector(
    selectPagedCharacters,
    selectBookmarkedCharacters,
    selectSearchTerm,
    (pagedCharacters, bookmarkedCharacters, searchTerm) => {
        const isSearching = !!searchTerm;
        return isSearching 
            ? pagedCharacters
            : bookmarkedCharacters;
    }
)