import React from 'react';
import block from 'bem-cn';
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

const b = block('order-creation-step');

class CharacterCard extends React.PureComponent<IProps> {
    
    public render(){
        const { character } = this.props;

        return (
            <div>
                <img src={character.imageUrl} />
                <h4>{character.name}</h4>
                {this.renderBookmark()}
            </div>
        )
    };

    private renderBookmark(){
        const { character } = this.props;
        return (
            <button onClick={this.toggleBookmark}>
                {character.isBookmarked ? 'Remove from bookmarks' : 'Bookmark'}
            </button>
        );
    }

    private toggleBookmark = () => {
        const { character, bookmarkCharacter } = this.props;
        bookmarkCharacter(character);
    }
}

export default connect(null, mapDispatch)(CharacterCard);