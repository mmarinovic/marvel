import React from 'react';
import { ICharacter } from '../../../types/models';

import { bindActionCreators, AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../../redux';

import './CharacterCard.scss';

interface IOwnProps {
    character: ICharacter;
}

interface IDispatchProps {
    bookmarkCharacter: typeof actions.bookmarkCharacter
}

function mapDispatch(dispatch: Dispatch<AnyAction>): IDispatchProps{
    return bindActionCreators({
        bookmarkCharacter: actions.bookmarkCharacter
    }, dispatch);
}

type IProps = IOwnProps & IDispatchProps;

class CharacterCard extends React.PureComponent<IProps> {
    
    public render(){
        const { character } = this.props;

        return (
            <div>
                <img src={character.imageUrl} />
                <h4>{character.name}</h4>
                <div>
                    {character.isBookmarked}
                </div>
            </div>
        )
    };
}

export default connect(null, mapDispatch)(CharacterCard);