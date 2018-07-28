import React from 'react';

import {
    SContainer
} from './styles';
import Backdrop, { ImageSliderItem } from '@app/ui/components/Highlights/Backdrop';
import { BaseTVShow } from '@app/core/models/TVShow';
import { getImage } from '@app/utils/images';

interface Props {
    directionIconSize?: number;
    items?: BaseTVShow[];
    height?: string;
    onChange?: (currentTvShow: BaseTVShow) => void;
}

class BackdropContainer extends React.Component<Props> {
    static defaultProps: Props;

    props: Props;

    onChange = (currentImage: ImageSliderItem) => {
        const { onChange, items } = this.props;

        if (onChange && items) {
            const tvShow = items.find(item => item.id === currentImage.id);

            if (tvShow) {
                onChange(tvShow);
            }
        }
    }

    render(): React.ReactNode {
        const { height, directionIconSize } = this.props;
        const images = this.props.items ? this.props.items.map(item => ({
            id: item.id,
            imageUrl: getImage(item.backdrop_path, 'original')
        })) : [];

        return (
            <SContainer height={height}>
                <Backdrop 
                    images={images}  
                    height={height}
                    onChange={this.onChange}
                    directionIconSize={directionIconSize}
                />
            </SContainer>
        );
    }
}

BackdropContainer.defaultProps = {
    height: '600px'
};

export default BackdropContainer;