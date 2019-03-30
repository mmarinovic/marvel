import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { actions } from '../../../redux';

import './Search.scss';

interface IOwnProps {
    placeholder?: string;
}

interface IDispatchProps {
    setSearchTerm: typeof actions.setSearchterm;
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>): IDispatchProps {
    return bindActionCreators({
        setSearchTerm: actions.setSearchterm
    }, dispatch);
}

type IProps = IDispatchProps & IOwnProps;

class Search extends React.PureComponent<IProps> {
    
    public render(){
        const { placeholder } = this.props;

        return (
            <div>
                <input type="text" placeholder={placeholder} onChange={this.onChange} />
            </div>
        )
    };

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { setSearchTerm } = this.props;
        setSearchTerm(e.target.value);
    }
}

export default connect(null, mapDispatchToProps)(Search);