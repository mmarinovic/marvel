import * as NS from '../../../namespace';
import { ILoadCharactersRequest } from '../../../types/requests';
import { actions } from '../..';
import { IPagedResponse } from '../../../types/common';
import { ICharacter } from '../../../types/models';

describe('communication actions', () => {

    it('should create load characters action', () => {
        const payload: ILoadCharactersRequest = { limit: 20, offset: 0, searchTerm: 'spider' };
        const expectedAction: NS.ILoadCharacters = { type: 'LOAD_CHARACTERS', payload };

        expect(actions.loadCharacters(payload)).toEqual(expectedAction)
    });

    it('should create load characters success action', () => {
        const payload: IPagedResponse<ICharacter[]> = { data: [], total: 0 };
        const expectedAction: NS.ILoadCharactersSuccess = { type: 'LOAD_CHARACTERS_SUCCESS', payload };

        expect(actions.loadCharactersSuccess(payload)).toEqual(expectedAction)
    });

    it('should create load characters failed action', () => {
        const payload = 'An error occured';
        const expectedAction: NS.ILoadCharactersFailed = { type: 'LOAD_CHARACTERS_FAILED', payload };

        expect(actions.loadCharactersFailed(payload)).toEqual(expectedAction)
    });
})