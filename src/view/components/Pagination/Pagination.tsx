import React from 'react';
import block from 'bem-cn';

import './Pagination.scss';

interface IOwnProps {
    totalCount: number;
    limit: number;
    onPageSelected: (page: number) => void;
}

interface IState {
    page: number;
}

const b = block('pagination');

class Pagination extends React.PureComponent<IOwnProps, IState>{

    public state = {
        page: 1
    }

    public render(){
        return (
            <div className={b()}>
                {this.renderPages()}
	        </div>
        );
    }

    private renderPages(){
        const { totalCount, limit } = this.props;
        const numberOfPages = Math.ceil(totalCount / limit);

        return (
            <ul>
                {
                    Array.from(Array(numberOfPages)).map((_: any, index: number) => {
                        const page = index + 1;
                        const activeClass = this.state.page == page ? 'active' : '';
                        return (
                            <li key={page} 
                                className={activeClass}
                                onClick={() => this.selectPage(page)}>{page}</li>
                        );
                    })
                }
            </ul>
        )
    }

    private selectPage(page: number){
        const { onPageSelected } = this.props;
        if(this.state.page !== page){
            this.setState({ page });
            onPageSelected(page);
        }
    }
}

export default Pagination;