import * as NS from '../../namespace';
import { initial } from '../initial';
import { ICharacter } from '../../types/models';

export default function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.Action): NS.IReduxState['data']{
    switch(action.type){
        case 'LOAD_CHARACTERS_SUCCESS': {
            return {
                ...state,
                pagedCharacters: action.payload.data,
                totalCharactersCount: action.payload.total
            };
        }

        case 'ADD_TO_BOOKMARK': {
            const bookmarkedCharacter: ICharacter = { 
                ...action.payload, 
                isBookmarked: true 
            };

            const newState = { ...state };
            newState.bookmarkedCharacters.push(bookmarkedCharacter);
            newState.pagedCharacters = newState.pagedCharacters.map((c) => c.id == bookmarkedCharacter.id ?bookmarkedCharacter : c);
            
            return newState;
        }

        case 'REMOVE_FROM_BOOKMARKS': {
            const newState = { ...state };
            newState.bookmarkedCharacters = newState.bookmarkedCharacters.filter(c => c.id != action.payload)
            newState.pagedCharacters = newState.pagedCharacters.map(
                (c) => c.id == action.payload ? { ...c, isBookmarked: false } : c
            );

            return newState;
        }

        case 'RESET_CHARACTERS': {
            return {
                ...state,
                pagedCharacters: [],
                totalCharactersCount: 0
            }
        }
        
        default: {
            console.log(state)
            return state;
        }
    }
}