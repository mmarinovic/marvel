import { IAction } from './types/redux';
import { ILoadCharactersRequest } from './types/requests';
import { IPagedResponse } from './types/common';
import { ICharacter } from './types/models';

export interface IReduxState {
  data: {
    bookmarkedCharacters: ICharacter[];
    pagedCharacters: ICharacter[],
    totalCharactersCount: number;
  };
}

export type ILoadCharacters = IAction<'LOAD_CHARACTERS', ILoadCharactersRequest>;
export type ILoadCharactersSuccess = IAction<'LOAD_CHARACTERS_SUCCESS', IPagedResponse<ICharacter[]>>;
export type ILoadCharactersFailed = IAction<'LOAD_CHARACTERS_FAILED', string>;

export type IBookmarkCharacter = IAction<'BOOKMARK_CHARACTER', string>;

export type Action = ILoadCharacters | ILoadCharactersSuccess | ILoadCharactersFailed
                  | IBookmarkCharacter;