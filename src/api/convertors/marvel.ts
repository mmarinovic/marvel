import { IMarvelCharacterResponse } from "../../types/responses";
import { ICharacter } from "../../types/models/character";

export function convertMarvelCharacterToCharacter(marvelCharacter: IMarvelCharacterResponse): ICharacter{
    return {  
        name: marvelCharacter.name,
        imageUrl: marvelCharacter.thumbnail.path + marvelCharacter.thumbnail.extension
    }
}