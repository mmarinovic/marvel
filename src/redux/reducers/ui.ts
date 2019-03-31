import * as NS from '../../namespace';
import { initial } from '../initial';

export default function uiReducer(state: NS.IReduxState['ui'] = initial.ui, action: NS.Action): NS.IReduxState['ui']{
    switch(action.type){
        case 'SET_SEARCH_TERM': {
            return {
                ...state,
                searchTerm: action.payload
            };
        }

        case 'LOAD_CHARACTERS': {
            return {
                ...state,
                isLoading: true
            }
        }

        case 'LOAD_CHARACTERS_FAILED':
        case 'LOAD_CHARACTERS_SUCCESS': {
            return {
                ...state,
                isLoading: false
            }
        }
        
        default: {
            return state;
        }
    }
}