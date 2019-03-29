import { IAction } from './types/redux';
import { ILoadCharactersRequest } from './types/requests';
import { IPagedResponse } from './types/common';
import { ICharacter } from './types/models/character';

export interface IReduxState {
  data: {
  
  };
}

export type ILoadCharacters = IAction<'LOAD_CHARACTERS', ILoadCharactersRequest>;
export type ILoadCharactersSuccess = IAction<'LOAD_CHARACTERS_SUCCESS', IPagedResponse<ICharacter[]>>;
export type ILoadCharactersFailed = IAction<'LOAD_CHARACTERS_FAILED', string>;

export type Action = ILoadCharacters | ILoadCharactersSuccess | ILoadCharactersFailed;