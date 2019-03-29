import React from 'react';
import { actions } from '../../redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import Search from '../components/Search/Search';

import './Home.scss';

interface IDispatchProps {
    loadCharacters: typeof actions.loadCharacters;
}

type IProps = IDispatchProps;

function mapDispatch(dispatch: Dispatch<AnyAction>): IDispatchProps{
    return bindActionCreators({
        loadCharacters: actions.loadCharacters,
    }, dispatch);
}

class Home extends React.PureComponent<IProps> {

    public render(){
        return (
            <div>
                <Search placeholder="Enter character name..." onSearch={this.onSearchTermChange}/>
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

export default connect(null, mapDispatch)(Home);