import * as NS from '../../../namespace';
import { actions } from '../..';
import { ICharacter } from '../../../types/models';

describe('data actions', () => {

    it('should create add to bookmark action', () => {
        const payload: ICharacter = { id: 1, imageUrl: 'dummy', name: 'Spider man' };
        const expectedAction: NS.IAddToBookmarks = { type: 'ADD_TO_BOOKMARK', payload };

        expect(actions.addToBookmarks(payload)).toEqual(expectedAction)
    });

    it('should create remove from bookmarks action', () => {
        const payload = 1;
        const expectedAction: NS.IRemoveFromBookmarks = { type: 'REMOVE_FROM_BOOKMARKS', payload };

        expect(actions.removeFromBookmarks(payload)).toEqual(expectedAction)
    });

    it('should create reset loaded characters action', () => {
        const expectedAction: NS.IResetLoadedCharacters = { type: 'RESET_LOADED_CHARACTERS' };

        expect(actions.resetLoadedCharacters()).toEqual(expectedAction)
    });

    it('should create clear loaded characters action', () => {
        const expectedAction: NS.IClearLoadedCharacters = { type: 'CLEAR_LOADED_CHARACTERS' };

        expect(actions.clearLoadedCharacters()).toEqual(expectedAction)
    });
})