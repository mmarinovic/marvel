import * as NS from '../namespace';

export function selectPagedCharacters(state: NS.IReduxState){
    return state.data.pagedCharacters;
}

export function selectBookmarkedCharacters(state: NS.IReduxState){
    return state.data.bookmarkedCharacters;
}

export function selectTotalCharactersCount(state: NS.IReduxState){
    return state.data.totalCharactersCount;
}