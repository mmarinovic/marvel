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
    addToBookmarks: typeof actions.addToBookmarks,
    removeFromBookmarks: typeof actions.removeFromBookmarks
}

function mapDispatch(dispatch: Dispatch<AnyAction>): IDispatchProps{
    return bindActionCreators({
        addToBookmarks: actions.addToBookmarks,
        removeFromBookmarks: actions.removeFromBookmarks
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
        const { character, addToBookmarks, removeFromBookmarks } = this.props;
        if(character.isBookmarked){
            removeFromBookmarks(character.id);
        }
        else{
            addToBookmarks(character);
        }
    }
}

export default connect(null, mapDispatch)(CharacterCard);