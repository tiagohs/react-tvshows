import React from 'react';
import { connect } from 'react-redux';

import { ListResult } from '@app/core/models/List';
import { BaseTVShow } from '@app/core/models/TVShow';
import { Reducers } from '@app/core/models/Redux';
import * as actions from '@app/redux/modules/TVShow/actions';

import ImageSliderContainer from '@app/ui/containers/HighlightsContainer/ImageSliderContainer';
import TVShowDescriptorContainer from '@app/ui/containers/HighlightsContainer/TVShowDescriptorContainer';

import { TVSHowList } from '@app/utils/Mocks/TVShows';
import Button from '@app/ui/components/Button';

interface Props {
    populars?: ListResult<BaseTVShow>;
    getPopulars?: (page: number) => void;
}

interface State {
    tvShow?: BaseTVShow;
}

const tvShowsList = TVSHowList.results;

class Home extends React.Component<Props, State> {
    
    index = 0;
    
    constructor(props: Props) {
        super(props);

        this.state = {
            tvShow: tvShowsList[this.index]
        };
    }

    componentDidMount() {
        
        if (this.props.getPopulars) {
            this.props.getPopulars(1);
        }
        
    }

    onClick = () => {
        this.index = this.index + 1;

        this.setState({
            tvShow: tvShowsList[this.index]
        });
    }

    render(): React.ReactNode {
        const { tvShow } = this.state;

        return (
            <div>
                <ImageSliderContainer />
                <TVShowDescriptorContainer 
                    tvShow={tvShow}
                />
                <Button onClick={this.onClick}>Next</Button>
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