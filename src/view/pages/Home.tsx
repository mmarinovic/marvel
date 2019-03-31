import React from 'react';
import { actions, selectors } from '../../redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import {ReactComponent as Loader }  from '../../assets/loader.svg';

import * as NS from '../../namespace';

import { ICharacter } from '../../types/models';
import CharacterList from '../components/CharacterList/CharacterList';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/Pagination/Pagination';
import block from 'bem-cn';

import './Home.scss';

interface IDispatchProps {
    loadCharacters: typeof actions.loadCharacters;
    resetLoadedCharacters: typeof actions.resetLoadedCharacters;
    clearLoadedCharacters: typeof actions.clearLoadedCharacters;
    setSearchterm: typeof actions.setSearchterm;
}

interface IStateProps{
    characters: ICharacter[];
    totalCharactersCount: number;
    searchTerm: string;
    isLoading: boolean;
}

type IProps = IDispatchProps & IStateProps;

function mapDispatch(dispatch: Dispatch<AnyAction>): IDispatchProps{
    return bindActionCreators({
        loadCharacters: actions.loadCharacters,
        resetLoadedCharacters: actions.resetLoadedCharacters,
        clearLoadedCharacters: actions.clearLoadedCharacters,
        setSearchterm: actions.setSearchterm
    }, dispatch);
}

function mapStateToProps(state: NS.IReduxState){
    return {
        characters: selectors.selectCharactersToDisplay(state),
        totalCharactersCount: selectors.selectTotalCharactersCount(state),
        searchTerm: selectors.selectSearchTerm(state),
        isLoading: selectors.selectIsLoading(state)
    }
}

const b = block('home');

class Home extends React.PureComponent<IProps> {

    pageLimit = 20;

    public componentWillReceiveProps({ searchTerm }: IProps){
        if(searchTerm !== this.props.searchTerm)
            this.onSearchTermChange(searchTerm);
    }

    public componentWillMount(){
        const { resetLoadedCharacters } = this.props;
        resetLoadedCharacters();
    }

    public render(){
        const { totalCharactersCount, isLoading } = this.props;
        return (
            <Layout onLogoClicked={this.onLogoClicked}>
                <div className={b()}>
                    {this.renderContent()}
                    
                </div>
            </Layout>
        )
    }

    private renderContent(){
        const { characters, isLoading, totalCharactersCount } = this.props;

        if(isLoading){
            return (
                <div className={b('loader-holder')} >
                    <Loader />
                </div>
            );
        }
        
        if(!characters.length) {
            return (
                <div className={b('placeholder')}>
                    <h2>No characters to display</h2>
                    <p>Search and bookmark your favorite characters!</p>
                </div>
            );
        }

        return (
                <div>
                    <CharacterList characters={characters} />
                    <Pagination totalCount={totalCharactersCount} 
                                            onPageSelected={this.onPageSelected} 
                                            limit={this.pageLimit}/>
                </div>
       );
    }

    onLogoClicked = () => {
        const { setSearchterm } = this.props;
        setSearchterm('');
    }

    onSearchTermChange = (searchTerm: string)  =>{
        const { loadCharacters, resetLoadedCharacters }  = this.props;
        resetLoadedCharacters();
        
        if(searchTerm){
            loadCharacters({
                limit: this.pageLimit,
                offset: 0,
                searchTerm: searchTerm
            });
        }
    }

    onPageSelected = (page: number) => {
        const { loadCharacters, clearLoadedCharacters, searchTerm }  = this.props;
        clearLoadedCharacters();
        loadCharacters({
            limit: this.pageLimit,
            offset: (page-1) * this.pageLimit,
            searchTerm: searchTerm
        });
    }
}

export default connect(mapStateToProps, mapDispatch)(Home);