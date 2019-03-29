import Axios, { AxiosInstance } from 'axios';
import marvelConfig from '../config/marvelApi';

export default class MarvelApi {

    private request: AxiosInstance;

    constructor(){
        this.request = Axios.create({
            baseURL: marvelConfig.baseUrl
        })
    }

    public async loadCharactersPaged(params: object) {
        return this.request.get(marvelConfig.charactersUrl, params);
    }
}