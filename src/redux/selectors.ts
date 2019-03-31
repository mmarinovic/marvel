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

export function selectIsLoading(state: NS.IReduxState){
    return state.ui.isLoading;
}

export const selectExtendedPagedCharacters = createSelector(
    selectPagedCharacters,
    selectBookmarkedCharacters,
    (pagedCharacters, bookmarkedCharacters) => {
        const bookmarkedIds = bookmarkedCharacters.map(b => b.id);
        return pagedCharacters.map(p => {
            p.isBookmarked = bookmarkedIds.includes(p.id);
            return p;
        })
    }
)

export const selectCharactersToDisplay = createSelector(
    selectExtendedPagedCharacters,
    selectBookmarkedCharacters,
    selectSearchTerm,
    (pagedCharacters, bookmarkedCharacters, searchTerm) => {
        const isSearching = !!searchTerm;
        return isSearching 
            ? pagedCharacters
            : bookmarkedCharacters;
    }
)