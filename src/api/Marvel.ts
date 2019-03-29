import Axios, { AxiosInstance } from 'axios';
import marvelConfig from '../config/marvelApi';
import { ILoadCharactersRequest } from '../types/requests';
import { convertMarvelCharacterToCharacter } from './convertors/marvel';
import { IPagedResponse } from '../types/common';
import { ICharacter } from '../types/models/character';
import { IMarvelCharactersResponse } from '../types/responses';

export default class MarvelApi {

    private request: AxiosInstance;

    constructor(){
        this.request = Axios.create({
            baseURL: marvelConfig.baseUrl,
            params: { apikey: marvelConfig.apiKey}
        })
    }

    public async loadCharacters(request: ILoadCharactersRequest): Promise<IPagedResponse<ICharacter[]>> {
        const response = await this.request.get<IMarvelCharactersResponse>(marvelConfig.charactersUrl, { params: {
            nameStartsWith: request.searchTerm,
            limit: request.limit,
            offset: request.offset
        }});
        console.log(response);
        return {
            total: response.data.data.total,
            data: response.data.data.results.map(convertMarvelCharacterToCharacter)
        }
    }
}