import React from 'react';
import { actions, selectors } from '../../redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import * as NS from '../../namespace';

import './Home.scss';
import { ICharacter } from '../../types/models';
import CharacterList from '../components/CharacterList/CharacterList';
import Layout from '../components/Layout/Layout';

interface IDispatchProps {
    loadCharacters: typeof actions.loadCharacters;
}

interface IStateProps{
    characters: ICharacter[];
    totalCharactersCount: number;
    searchTerm: string;
}

type IProps = IDispatchProps & IStateProps;

function mapDispatch(dispatch: Dispatch<AnyAction>): IDispatchProps{
    return bindActionCreators({
        loadCharacters: actions.loadCharacters,
    }, dispatch);
}

function mapStateToProps(state: NS.IReduxState){
    return {
        characters: selectors.selectCharactersToDisplay(state),
        totalCharactersCount: selectors.selectTotalCharactersCount(state),
        searchTerm: selectors.selectSearchTerm(state)
    }
}

class Home extends React.PureComponent<IProps> {

    public componentWillReceiveProps({ searchTerm }: IProps){
        if(searchTerm !== this.props.searchTerm)
            this.onSearchTermChange(searchTerm);
    }

    public render(){
        const { characters } = this.props;
        return (
            <Layout>
                <CharacterList characters={characters} />
            </Layout>
        )
    }

    onSearchTermChange = (searchTerm: string)  =>{
        const { loadCharacters }  = this.props;

        loadCharacters({
            limit: 20,
            offset: 0,
            searchTerm: searchTerm
        });
    }
}

export default connect(mapStateToProps, mapDispatch)(Home);