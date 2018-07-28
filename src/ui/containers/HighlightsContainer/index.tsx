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
import BaseContainer, { 
    SMALL_DEVICES_BREAKPOINT,
    EXTRA_LARGE_DEVICES_BREAKPOINT,
    LARGE_DEVICES_BREAKPOINT,
    MEDIUM_DEVICES_BREAKPOINT, 
    BaseState
} from '@app/ui/containers/BaseContainer';
import { BackdropProps } from '@app/ui/components/Highlights/Backdrop';
import { PosterProps } from '@app/ui/components/Highlights/Poster';

interface Props {
    populars?: ListResult<BaseTVShow>;
    getPopulars?: (page: number) => void;
}

interface State extends BaseState {
    currentBreakpoint?: number;
    containerHeight?: string;
    tvShow?: BaseTVShow;
    withPoster?: boolean;

    posterConfig?: PosterProps;
    backdropConfig?: BackdropProps;
}

const tvShowsList = TVSHowList.results;

class HighlightsContainer extends BaseContainer<Props, State> {
    
    constructor(props: Props) {
        super(props);

        this.state = {...this.state, tvShow: tvShowsList[0]};
    } 

    onGetSmallDevicesConfiguration(): State {
        return {
            currentBreakpoint: SMALL_DEVICES_BREAKPOINT,
            containerHeight: '450px',
            withPoster: false,
            backdropConfig: {
                directionIconSize: 30
            }
        };
    }

    onGetMediumDevicesConfiguration(): State {
        return {
            currentBreakpoint: MEDIUM_DEVICES_BREAKPOINT,
            containerHeight: '450px',
            withPoster: false,
            backdropConfig: {
                directionIconSize: 30
            }
        };
    }

    onGetLargeDevicesConfiguration(): State {
        return {
            currentBreakpoint: LARGE_DEVICES_BREAKPOINT,
            containerHeight: '600px',
            withPoster: true,
            posterConfig: {
                width: '240px',
                height: '380px',
            },
            backdropConfig: {
                directionIconSize: 50
            }
        };
    }

    onGetExtraLargeDevicesConfiguration(): State {
        return {
            currentBreakpoint: EXTRA_LARGE_DEVICES_BREAKPOINT,
            containerHeight: '600px',
            withPoster: true,
            posterConfig: {
                width: '260px',
                height: '400px',
            },
            backdropConfig: {
                directionIconSize: 50
            }
        };
    }
    
    onChange = (currentTvShow: BaseTVShow) => {
        this.setState({
            tvShow: currentTvShow
        }); 
    }

    render(): React.ReactNode {
        const { populars } = this.props;
        const { tvShow, withPoster, posterConfig, backdropConfig, containerHeight } = this.state;

        const popularsItems = populars && populars.results ? populars.results.slice(0, 5) : undefined;

        return popularsItems ? (
            <SHighlightsContainer height={containerHeight || '450px'}>
                <SBackground>
                    <BackdropContainer
                        items={popularsItems}
                        onChange={this.onChange}
                        height={containerHeight || '450px'}
                        {...backdropConfig}
                    />
                </SBackground>

                { withPoster && (
                    <SPoster>
                        <PosterContainer  
                            tvShow={tvShow}
                            {...posterConfig}
                        />
                    </SPoster>
                ) }

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