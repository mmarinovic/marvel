import * as NS from '../../namespace';
import { initial } from '../initial';

export default function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.Action){
    switch(action.type){
        case 'LOAD_CHARACTERS_SUCCESS': {
            return {
                ...state,
                characters: action.payload
            };
        }

        default: {
            return state;
        }
    }
}