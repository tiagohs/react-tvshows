import React from 'react';

import { 
    SContainer,
    SFooterContainer,
    SDetails,
    SVote,
    SPlay
} from './styles';
import { BaseTVShow } from '@app/core/models/TVShow';
import { getImage } from '@app/utils/images';
import Image from '@app/ui/components/Image';
import Icon from '@app/ui/components/Icon';

export interface PosterProps {
    tvShow?: BaseTVShow;
    state?: string;
    width?: string;
    height?: string;
}

class Poster extends React.Component<PosterProps> {
    static defaultProps: PosterProps;

    render(): React.ReactNode {
        const { state, tvShow, width, height } = this.props;
        
        if (tvShow) {

            return (
                <SContainer 
                    state={state}
                    width={width}
                    height={height}
                >
                    <Image 
                        src={tvShow.poster_path && getImage(tvShow.poster_path, 'w500')}
                        width={width}
                        height={height}
                    />
                    <SPlay state={state}>
                        <Icon name="play" size={30} color="#fff" />
                    </SPlay>
                    <SFooterContainer state={state}>
                        <SDetails>24, 8 de Novembro</SDetails>
                        <SDetails>English | Romance, Ação</SDetails>
                    </SFooterContainer>
                    <SVote state={state}>8.5</SVote>
                </SContainer>
            );
        }

        return null;
    }
}

export default Poster;