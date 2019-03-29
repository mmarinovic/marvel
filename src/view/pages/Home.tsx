import React from 'react';
import { actions, selectors } from '../../redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import Search from '../components/Search/Search';
import * as NS from '../../namespace';

import './Home.scss';
import { ICharacter } from '../../types/models';
import CharacterList from '../components/CharacterList/CharacterList';

interface IDispatchProps {
    loadCharacters: typeof actions.loadCharacters;
}

interface IStateProps{
    characters: ICharacter[];
    totalCharactersCount: number;
}

type IProps = IDispatchProps & IStateProps;

function mapDispatch(dispatch: Dispatch<AnyAction>): IDispatchProps{
    return bindActionCreators({
        loadCharacters: actions.loadCharacters,
    }, dispatch);
}

function mapStateToProps(state: NS.IReduxState){
    return {
        characters: selectors.selectPagedCharacters(state),
        totalCharactersCount: selectors.selectTotalCharactersCount(state)
    }
}
class Home extends React.PureComponent<IProps> {

    public render(){
        const { characters } = this.props;
        return (
            <div>
                <Search placeholder="Enter character name..." onSearch={this.onSearchTermChange}/>
                <CharacterList characters={characters} />
            </div>
        )
    }

    onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>)  =>{
        const { loadCharacters }  = this.props;
        loadCharacters({
            limit: 10,
            offset: 0,
            searchTerm: e.target.value
        });
    }
}

export default connect(mapStateToProps, mapDispatch)(Home);