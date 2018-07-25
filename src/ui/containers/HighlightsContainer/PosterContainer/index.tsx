import React from 'react';

import { BaseTVShow } from '@app/core/models/TVShow';
import { Transition } from 'react-transition-group';
import Poster from '@app/ui/components/Highlights/Poster';

interface Props {
    tvShow?: BaseTVShow;
}

interface State {
    show?: boolean;
    tvShow?: BaseTVShow;
    next?: BaseTVShow;
}

class PosterContainer extends React.Component<Props, State> {
    static defaultProps: Props;

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
            tvShow: undefined
        };
    }

    onExit = () => {
        const { next } = this.state;

        this.setState({
            show: true,
            tvShow: next
        });
    }

    render(): React.ReactNode {
        const { tvShow, show } = this.state;

        return (
            <div>
                <Transition
                    in={show}
                    timeout={500} 
                    onExited={this.onExit}
                >
                    {(state: string) => 
                    <Poster 
                        tvShow={tvShow}
                        state={state}
                    />}
                    
                </Transition>
                
            </div>
        );
    }
}

export default PosterContainer;