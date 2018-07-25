import React from 'react';

import { ListResult } from '@app/core/models/List';
import { BaseTVShow } from '@app/core/models/TVShow';

import BackdropContainer from '@app/ui/containers/HighlightsContainer/BackdropContainer';
import DescriptorContainer from '@app/ui/containers/HighlightsContainer/DescriptorContainer';

import { TVSHowList } from '@app/utils/Mocks/TVShows';
import PosterContainer from '@app/ui/containers/HighlightsContainer/PosterContainer';

import {
    SHighlightsContainer,
    SBackground,
    SDescriptor,
    SPoster
} from './styles';

interface Props {
    populars?: ListResult<BaseTVShow>;
    getPopulars?: (page: number) => void;
}

interface State {
    tvShow?: BaseTVShow;
}

const tvShowsList = TVSHowList.results;

class HighlightsContainer extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);

        this.state = {
            tvShow: tvShowsList[0]
        };
    }

    onChange = (currentTvShow: BaseTVShow) => {
        this.setState({
            tvShow: currentTvShow
        });
    }

    render(): React.ReactNode {
        const height = '600px';
        const { populars } = this.props;
        const { tvShow } = this.state;

        const popularsItems = populars && populars.results ? populars.results.slice(0, 5) : undefined;

        return popularsItems ? (
            <SHighlightsContainer height={height}>
                <SBackground>
                    <BackdropContainer
                        items={popularsItems}
                        onChange={this.onChange}
                        height={height}
                    />
                </SBackground>
                <SPoster>
                    <PosterContainer  
                        tvShow={tvShow}
                    />
                </SPoster> 
                <SDescriptor>
                    <DescriptorContainer 
                        tvShow={tvShow}
                    />
                </SDescriptor>
            </SHighlightsContainer>
        ) : <div>'Empty'</div>;
    }
}

export default HighlightsContainer;