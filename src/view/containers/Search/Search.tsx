import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { actions } from '../../../redux';


import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import './Search.scss';
import block from 'bem-cn';

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

const b = block('search');

export class Search extends React.PureComponent<IProps> {
    
    onChange$ = new Subject<string>();
    input: HTMLInputElement | null = null;

    public componentDidMount(){
        const { setSearchTerm } = this.props;
        this.onChange$
            .pipe(debounceTime(300))
            .subscribe(searchTerm => {
                setSearchTerm(searchTerm)
            });
    }

    public componentWillUnmount(){
        this.onChange$.unsubscribe();
    }

    public render(){
        const { placeholder } = this.props;
        return (
            <div className={b()}>
                <input type="text" placeholder={placeholder} onChange={this.onChange} />
            </div>
        )
    };

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.onChange$.next(e.target.value);
    }
}

export default connect(null, mapDispatchToProps)(Search);