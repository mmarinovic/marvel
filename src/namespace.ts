import { IAction } from './types/redux';
import { ILoadHeroesRequest } from './types/requests';

export interface IReduxState {
  data: {
  
  };
}

export type ILoadHeroes = IAction<'LOAD_HEROES', ILoadHeroesRequest>;
export type ILoadHeroesSuccess = IAction<'LOAD_HEROES_SUCCESS', []>;

export type Action = ILoadHeroes | ILoadHeroesSuccess;