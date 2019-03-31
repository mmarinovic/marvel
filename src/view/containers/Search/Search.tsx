import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { actions, selectors } from '../../../redux';

import * as NS from '../../../namespace';

import './Search.scss';

interface IOwnProps {
    placeholder?: string;
}

interface IDispatchProps {
    setSearchTerm: typeof actions.setSearchterm;
}

interface IStateProps {
    searchTerm: string;
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>): IDispatchProps {
    return bindActionCreators({
        setSearchTerm: actions.setSearchterm
    }, dispatch);
}

function mapStateToProps(state: NS.IReduxState): IStateProps{
    return {
        searchTerm: selectors.selectSearchTerm(state)
    }
}

type IProps = IDispatchProps & IOwnProps & IStateProps;

class Search extends React.PureComponent<IProps> {
    
    public render(){
        const { placeholder, searchTerm } = this.props;
        return (
            <div>
                <input type="text" value={searchTerm} placeholder={placeholder} onChange={this.onChange} />
            </div>
        )
    };

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { setSearchTerm } = this.props;
        setSearchTerm(e.target.value);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);