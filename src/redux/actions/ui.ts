import * as NS from '../../namespace';

export function setSearchterm(payload: string): NS.ISetSearchTerm{
    return { type: 'SET_SEARCH_TERM', payload };
}