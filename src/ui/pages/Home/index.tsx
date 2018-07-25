import React from 'react';
import { connect } from 'react-redux';

import { ListResult } from '@app/core/models/List';
import { BaseTVShow } from '@app/core/models/TVShow';
import { Reducers } from '@app/core/models/Redux';
import * as actions from '@app/redux/modules/TVShow/actions';

import { TVSHowList } from '@app/utils/Mocks/TVShows';
import HighlightsContainer from '@app/ui/containers/HighlightsContainer';

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
        
        /*if (this.props.getPopulars) {
            this.props.getPopulars(1);
        }*/
        
    }

    render(): React.ReactNode {

        return (
            <div>
                <HighlightsContainer
                    populars={TVSHowList}
                />
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