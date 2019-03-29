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

        default: {
            return state;
        }
    }
}