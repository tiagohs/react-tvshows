
import React from 'react';
import { BaseTVShow } from '@app/core/models/TVShow';
import Descriptor from '@app/ui/components/Descriptor';
import * as dataUtils from '@app/utils/date';
import { getGenres } from '@app/utils/genres';

import {
    STagsContainer
} from './styles';
import Tag from '@app/ui/components/Tag';

interface Props {
    tvShow: BaseTVShow;
}

class TVShowDescriptorContainer extends React.Component<Props> {
    
    renderTags = () => {
        const { tvShow } = this.props;
        const year = dataUtils.createDate(tvShow.first_air_date).getFullYear().toString();
        const genres = getGenres(tvShow.genre_ids);

        return (
            <STagsContainer>
                <Tag text={year} outline={true} />
                {genres.map(genre => (<Tag text={genre} />))}
            </STagsContainer>
        );
    }

    render(): React.ReactNode {
        const { tvShow } = this.props;

        return (
            <Descriptor 
                item={tvShow} 
                mainName="Séries Populares"  
                renderTags={this.renderTags}
            />
        );
    }
}

export default TVShowDescriptorContainer;