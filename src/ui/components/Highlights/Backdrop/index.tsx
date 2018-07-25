import React from 'react';

import {
    SContainer,
    SImageContainer
} from './styles';
import Image from '@app/ui/components/Image';

export interface ImageSliderItem {
    id: number;
    imageUrl: string;
}

interface Props {
    images?: ImageSliderItem[];
    currentImage?: ImageSliderItem;
    height?: string;
}

class Backdrop extends React.Component<Props> {
    static defaultProps: Props;

    renderImages = (images: ImageSliderItem[], currentImage?: ImageSliderItem) => {
        const { height } = this.props;
        
        return images.map(imageItem => (
            <SImageContainer 
                key={imageItem.id} 
                isVisible={imageItem.id === currentImage!!.id}
                height={height}
            >
                <Image src={imageItem.imageUrl} />
            </SImageContainer>
        ));
    }

    render(): React.ReactNode {
        const { images, currentImage } = this.props;

        return (
            <SContainer>
                { 
                    images && images.length > 0 ? this.renderImages(images, currentImage) : null
                }
            </SContainer>
        );
    }
}

export default Backdrop;