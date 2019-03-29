import { IMarvelCharacterResponse } from "../../types/responses";
import { ICharacter } from "../../types/models";

export function convertMarvelCharacterToCharacter(marvelCharacter: IMarvelCharacterResponse): ICharacter{
    return {  
        id: marvelCharacter.id,
        name: marvelCharacter.name,
        imageUrl: `${marvelCharacter.thumbnail.path}.${marvelCharacter.thumbnail.extension}`
    }
}