import React from 'react';
import { connect } from 'react-redux';

import { ListResult } from '@app/core/models/List';
import { BaseTVShow } from '@app/core/models/TVShow';
import { Reducers } from '@app/core/models/Redux';
import * as actions from '@app/redux/modules/TVShow/actions';

import ImageSliderContainer from '@app/ui/containers/ImageSliderContainer';

interface Props {
    populars?: ListResult<BaseTVShow>;
    getPopulars?: (page: number) => void;
}

class Home extends React.Component<Props> {
    
    props: Props;

    componentDidMount() {
        
        if (this.props.getPopulars) {
            this.props.getPopulars(1);
        }
        
    }

    render(): React.ReactNode {
        
        return (
            <div>
                <ImageSliderContainer />
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