import React from 'react';
import { ICharacter } from '../../../types/models';

import CharacterCard from '../../containers/CharacterCard/CharacterCard';

import './CharacterList.scss';

interface IOwnProps {
    characters: ICharacter[];
    placeholder?: string;
}

class CharacterList extends React.PureComponent<IOwnProps> {
    
    public render(){
        const { characters } = this.props;

        return (
            <div>
                {
                    characters.map(character => (
                        <CharacterCard key={character.id} character={character}/>
                    ))
                }
            </div>
        )
    };
}

export default CharacterList;