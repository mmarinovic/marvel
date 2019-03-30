import * as NS from '../../namespace';
import { ICharacter } from '../../types/models';

export function addToBookmarks(payload: ICharacter): NS.IAddToBookmarks {
    return { type: 'ADD_TO_BOOKMARK', payload };
}

export function removeFromBookmarks(payload: number): NS.IRemoveFromBookmarks {
    return { type: 'REMOVE_FROM_BOOKMARKS', payload };
}

export function resetCharacters(): NS.IResetCharacters {
    return { type: 'RESET_CHARACTERS' };
}