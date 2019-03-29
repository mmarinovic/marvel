import * as NS from '../../namespace';
import { ILoadHeroesRequest } from '../../types/requests';

export function loadHeroes(payload: ILoadHeroesRequest) : NS.ILoadHeroes{
    return { type: 'LOAD_HEROES', payload};
}