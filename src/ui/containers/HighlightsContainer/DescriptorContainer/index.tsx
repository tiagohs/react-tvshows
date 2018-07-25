
import React from 'react';
import { BaseTVShow } from '@app/core/models/TVShow';
import Descriptor from '@app/ui/components/Highlights/Descriptor';
import * as dataUtils from '@app/utils/date';
import { getGenres } from '@app/utils/genres';

import Tag from '@app/ui/components/Tag';

import {
    STagsContainer,
    SFade,
    SMainTitle
} from './styles';
import { Transition } from 'react-transition-group';

interface Props {
    tvShow?: BaseTVShow;
}

interface State {
    show?: boolean;
    tvShow?: BaseTVShow;
    next?: BaseTVShow;
    onExit?: () => void;
}

class TVShowDescriptorContainer extends React.Component<Props, State> {
    
    static getDerivedStateFromProps(props: Props, state: State) {

        if (!state.show && !state.tvShow) {
            return {
                show: true,
                tvShow: props.tvShow
            };
        }
        
        if (state.show === true && (props.tvShow !== state.tvShow)) {
            return {
                next: props.tvShow,
                show: false,
            };
        }

        if (!state.show && (props.tvShow !== state.tvShow)) {
            return {
                tvShow: state.next,
                show: true,
            };
        }

        return null;
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            show: false,
            next: undefined,
            tvShow: undefined,
        };
    }

    onExit = () => {
        const { next } = this.state;

        this.setState({
            show: true,
            tvShow: next
        });
    }
    
    renderTags = () => {
        const { tvShow } = this.state;

        if (tvShow) {
            const year = dataUtils.createDate(tvShow.first_air_date).getFullYear().toString();
            const genres = getGenres(tvShow.genre_ids);
    
            return (
                <STagsContainer>
                    <Tag text={year} outline={true} outlineColor="#fff" />
                    {genres.map(genre => (<Tag key={genre} text={genre} />))}
                </STagsContainer>
            );
        }

        return null;
    }

    renderFade = (state: string, tvShow?: BaseTVShow) => {
        return (
            <div>
                <SMainTitle>Séries Populares</SMainTitle>
                <SFade state={state}>
                    <Descriptor 
                        item={tvShow} 
                        renderTags={this.renderTags}
                        state={state}
                    />
                </SFade>
            </div>);
    }

    render(): React.ReactNode {
        const { show, tvShow } = this.state;

        return (
            <Transition
                in={show}
                timeout={300} 
                onExited={this.onExit}
            >
                {(state: string) => this.renderFade(state, tvShow)}
            </Transition>
        );
    }
}

export default TVShowDescriptorContainer;