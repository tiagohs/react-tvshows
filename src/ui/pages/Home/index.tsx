import React from 'react';
import { connect } from 'react-redux';

import { ListResult } from '../../../core/models/List';
import { BaseTVShow } from '../../../core/models/TVShow';
import * as actions from './../../../redux/modules/TVShow/actions';
import { Reducers } from '../../../core/models/Redux';

interface Props {
    populars?: ListResult<BaseTVShow>;
    getPopulars?: (page: number) => void;
}

class Home extends React.Component<Props> {
    
    componentDidMount() {
        
        if (this.props.getPopulars) {
            this.props.getPopulars(1);
        }
        
    }

    render(): React.ReactNode {
        const { populars } = this.props;
        
        return (
            <div>
                <span> {populars && populars.total_pages} </span>
            </div>
        );
    }
}

const mapStateToProps = (state: Reducers): Props => ({
    populars: state.tvshows.populars
});

const mapDispatchToProps = {
    getPopulars: actions.getPopularTvShows
};

export default connect<Props>(mapStateToProps, mapDispatchToProps)(Home);