import * as NS from '../../namespace';
import { ICharacter } from '../../types/models';

export function bookmarkCharacter(payload: ICharacter): NS.IBookmarkCharacter{
    return { type: 'BOOKMARK_CHARACTER', payload };
}