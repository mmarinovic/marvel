import React from 'react';
import block from 'bem-cn';
import {ReactComponent as Logo }  from '../../../assets/logo.svg';
import Search from '../../containers/Search/Search';

import './Layout.scss';

interface IOwnProps {
    children: any;
}

const b = block('layout');

class Layout extends React.PureComponent<IOwnProps>{
    public render(){
        const { children } = this.props;

        return (
            <div className={b()}>
                <header>
                    <div className={b('logo')}>
                        <Logo />
                    </div>
                    <h1>Characters</h1>
                    <Search placeholder="Search characters" />
                </header>

                {children}

                <footer className={b('copyright')}>
                    &copy; 2019 Marvel
                </footer>
            </div>
        );
    }
}

export default Layout;