import { IAction } from './types/redux';
import { ILoadCharactersRequest } from './types/requests';
import { IPagedResponse } from './types/common';
import { ICharacter } from './types/models';

export interface IReduxState {
  data: {
    bookmarkedCharacters: ICharacter[];
    pagedCharacters: ICharacter[],
    totalCharactersCount: number;
  },
  ui: {
    searchTerm: string;
  }
}

export type ILoadCharacters = IAction<'LOAD_CHARACTERS', ILoadCharactersRequest>;
export type ILoadCharactersSuccess = IAction<'LOAD_CHARACTERS_SUCCESS', IPagedResponse<ICharacter[]>>;
export type ILoadCharactersFailed = IAction<'LOAD_CHARACTERS_FAILED', string>;

export type IAddToBookmarks = IAction<'ADD_TO_BOOKMARK', ICharacter>;
export type IRemoveFromBookmarks = IAction<'REMOVE_FROM_BOOKMARKS', number>;

export type ISetSearchTerm = IAction<'SET_SEARCH_TERM', string>;

export type Action = ILoadCharacters | ILoadCharactersSuccess | ILoadCharactersFailed
                  | IAddToBookmarks | IRemoveFromBookmarks | ISetSearchTerm;