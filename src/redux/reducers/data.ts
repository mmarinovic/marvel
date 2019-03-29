import * as NS from '../../namespace';
import { initial } from '../initial';

export default function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.Action): NS.IReduxState['data']{
    switch(action.type){
        case 'LOAD_CHARACTERS_SUCCESS': {
            return {
                ...state,
                pagedCharacters: action.payload.data,
                totalCharactersCount: action.payload.total
            };
        }

        case 'BOOKMARK_CHARACTER': {
            return {
                ...state,
                bookmarkedCharacters: [...state.bookmarkedCharacters, action.payload]
            }
        }
        
        default: {
            console.log(state)
            return state;
        }
    }
}