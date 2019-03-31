import Axios from 'axios-observable';
import marvelConfig from '../config/marvelApi';
import { ILoadCharactersRequest } from '../types/requests';
import { convertMarvelCharacterToCharacter } from './convertors/marvel';
import { IPagedResponse } from '../types/common';
import { ICharacter } from '../types/models';
import { IMarvelCharactersResponse } from '../types/responses';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export default class MarvelApi {

    private request: Axios;

    constructor(){
        this.request = Axios.create({
            baseURL: marvelConfig.baseUrl,
            params: { apikey: marvelConfig.apiKey}
        })
    }

    public loadCharacters(request: ILoadCharactersRequest): Observable<IPagedResponse<ICharacter[]>> {
        return this.request.get<IMarvelCharactersResponse>(marvelConfig.charactersUrl, { params: {
            nameStartsWith: request.searchTerm,
            limit: request.limit,
            offset: request.offset
        }}).pipe(
            map(response => ({
                total: response.data.data.total,
                data: response.data.data.results.map(convertMarvelCharacterToCharacter)
            }))
        );
    }
}