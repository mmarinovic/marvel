import React from 'react';
import { actions, selectors } from '../../redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import * as NS from '../../namespace';

import { ICharacter } from '../../types/models';
import CharacterList from '../components/CharacterList/CharacterList';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/Pagination/Pagination';

import './Home.scss';

interface IDispatchProps {
    loadCharacters: typeof actions.loadCharacters;
    resetCharacters: typeof actions.resetCharacters;
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
        resetCharacters: actions.resetCharacters,
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

    pageLimit = 20;

    public componentWillReceiveProps({ searchTerm }: IProps){
        if(searchTerm !== this.props.searchTerm)
            this.onSearchTermChange(searchTerm);
    }

    public render(){
        const { characters, totalCharactersCount } = this.props;
        return (
            <Layout>
                <CharacterList characters={characters} />
                <Pagination totalCount={totalCharactersCount} 
                            onPageSelected={this.onPageSelected} 
                            limit={this.pageLimit}/>
            </Layout>
        )
    }

    onSearchTermChange = (searchTerm: string)  =>{
        const { loadCharacters, resetCharacters }  = this.props;

        resetCharacters();

        if(searchTerm){
            loadCharacters({
                limit: this.pageLimit,
                offset: 0,
                searchTerm: searchTerm
            });
        }
    }

    onPageSelected = (page: number) => {
        const { loadCharacters, resetCharacters, searchTerm }  = this.props;
        loadCharacters({
            limit: this.pageLimit,
            offset: (page-1) * this.pageLimit,
            searchTerm: searchTerm
        });
    }
}

export default connect(mapStateToProps, mapDispatch)(Home);