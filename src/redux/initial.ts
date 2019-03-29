import * as NS from '../namespace';

export const initial: NS.IReduxState = {
    data: {
        bookmarkedCharacters: [],
        pagedCharacters: [],
        totalCharactersCount: 0
    },
    ui: {
        searchTerm: ''
    }
}