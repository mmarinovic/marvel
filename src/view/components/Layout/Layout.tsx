import React from 'react';
import block from 'bem-cn';
import {ReactComponent as Logo }  from '../../../assets/logo.svg';
import Search from '../../containers/Search/Search';

import './Layout.scss';

interface IOwnProps {
    children: any;
    onLogoClicked?: Function;
}

const b = block('layout');

class Layout extends React.PureComponent<IOwnProps>{
    public render(){
        const { children } = this.props;

        return (
            <div className={b()}>
                <header>
                    <div className={b('logo')} onClick={this.handleLogoClick}>
                        <Logo />
                    </div>
                    <h1>Characters</h1>
                    <div className="search">
                        <Search placeholder="Search characters" />
                    </div>
                </header>

                {children}

                <footer className={b('copyright')}>
                    &copy; 2019 Marvel
                </footer>
            </div>
        );
    }

    private handleLogoClick = () => {
        const { onLogoClicked } = this.props;
        onLogoClicked && onLogoClicked();
    }
}

export default Layout;