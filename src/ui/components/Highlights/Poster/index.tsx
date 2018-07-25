import React from 'react';

import { 
    SContainer,
    SFooterContainer,
    SDetails,
    SPoster,
    SVote
} from './styles';
import { BaseTVShow } from '@app/core/models/TVShow';
import { getImage } from '@app/utils/images';

interface Props {
    tvShow?: BaseTVShow;
    state?: string;
}

class Poster extends React.Component<Props> {
    static defaultProps: Props;

    render(): React.ReactNode {
        const { state, tvShow } = this.props;
        
        if (tvShow) {

            return (
                <SContainer state={state}>
                    <SPoster 
                        src={tvShow.poster_path && getImage(tvShow.poster_path, 'w780')}
                        width="300px"
                    />
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