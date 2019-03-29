export interface IMarvelCharacterResponse {
    id: number;
    name: string;
    thumbnail: {
        extension: string;
        path: string;
    }
}

export interface IMarvelCharactersResponse {
    data: {
        total: number;
        results: IMarvelCharacterResponse[];
    }
}