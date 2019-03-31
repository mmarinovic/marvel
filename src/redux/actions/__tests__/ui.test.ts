import * as NS from '../../../namespace';
import { actions } from '../..';

describe('ui actions', () => {

    it('should create set search term action', () => {
        const payload = 'Spider';
        const expectedAction: NS.ISetSearchTerm = { type: 'SET_SEARCH_TERM', payload };

        expect(actions.setSearchterm(payload)).toEqual(expectedAction)
    });
})