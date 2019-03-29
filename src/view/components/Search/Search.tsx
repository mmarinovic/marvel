import React from 'react';

import './Search.scss';

interface IOwnProps {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

class Search extends React.PureComponent<IOwnProps> {
    
    public render(){
        const { placeholder, onSearch } = this.props;

        return (
            <div>
                <input type="text" placeholder={placeholder} onChange={onSearch} />
            </div>
        )
    };
}

export default Search;