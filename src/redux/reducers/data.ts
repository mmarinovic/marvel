import * as NS from '../../namespace';
import { initial } from '../initial';

export default function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.Action){
    switch(action.type){
        case 'LOAD_HEROES_SUCCESS': {
            return {
                ...state
            };
        }

        default: {
            return state;
        }
    }
}