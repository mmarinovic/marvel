import React from 'react';
import { ICharacter } from '../../../types/models';

import CharacterCard from '../../containers/CharacterCard/CharacterCard';

import './CharacterList.scss';
import block from 'bem-cn';

interface IOwnProps {
    characters: ICharacter[];
    placeholder?: string;
}

const b = block('character-list');

class CharacterList extends React.PureComponent<IOwnProps> {
    
    public render(){
        const { characters } = this.props;
        
        return (
            <div className={b()}>
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