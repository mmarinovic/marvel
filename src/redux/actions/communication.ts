import * as NS from '../../namespace';
import { ILoadCharactersRequest } from '../../types/requests';
import { IPagedResponse } from '../../types/common';
import { ICharacter } from '../../types/models';

export function loadCharacters(payload: ILoadCharactersRequest) : NS.ILoadCharacters{
    return { type: 'LOAD_CHARACTERS', payload};
}

export function loadCharactersSuccess(payload: IPagedResponse<ICharacter[]>) : NS.ILoadCharactersSuccess{
    return { type: 'LOAD_CHARACTERS_SUCCESS', payload };
}

export function loadCharactersFailed(payload: string) : NS.ILoadCharactersFailed{
    return { type: 'LOAD_CHARACTERS_FAILED', payload };
}

export function bookmarkCharacter(payload: string): NS.IBookmarkCharacter{
    return { type: 'BOOKMARK_CHARACTER', payload };
}