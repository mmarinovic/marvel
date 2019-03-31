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

const b = block('character-card');

export class CharacterCard extends React.PureComponent<IProps> {
    
    public render(){
        const { character } = this.props;

        return (
            <article className={b()}>
                <div className={b('holder')}>
                    <div className={b('image')} style={{backgroundImage: `url(${character.imageUrl})`}}>
                        <img src={character.imageUrl} />
                    </div>
                    <h2 className={b('title')}>{character.name}</h2>
                    <span onClick={this.toggleBookmark} className={b('bookmarked')}>
                        {character.isBookmarked ? 'Remove bookmark': 'Add bookmark'}
                    </span>
                </div>
            </article>
        )
    };

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