import React from 'react';

import {
    SContainer,
    SImageContainer,
    SRightButton,
    SLeftButton,
    SCirclesContainer,
} from './styles';
import Image from '@app/ui/components/Image';
import DirectionButton from '@app/ui/components/Highlights/Backdrop/DirectionButton';
import Circle from '@app/ui/components/Highlights/Backdrop/Circle';

export interface ImageSliderItem {
    id: number;
    imageUrl: string;
}

export interface BackdropProps {
    directionIconSize?: number;
    images?: ImageSliderItem[];
    height?: string;
    initialIndex?: number;
    onChange?: (currentItem: ImageSliderItem) => void;
}

interface State {
    currentItem?: ImageSliderItem;
}

class Backdrop extends React.Component<BackdropProps, State> {
    static defaultProps: BackdropProps;

    private originalItems: ImageSliderItem[];
    private index: number = 0;

    constructor(props: BackdropProps) {
        super(props);

        this.originalItems = props.images || [];
        this.index = props.initialIndex && props.images && (props.initialIndex < props.images.length) ? 
                props.initialIndex : 
                0;

        this.state = {
            currentItem: this.originalItems ? this.originalItems[this.index] : undefined
        };
    }

    onChange = (currentItem: ImageSliderItem) => {
        const { onChange } = this.props;

        if (onChange) {
            onChange(currentItem);
        }
    }

    onNext = () => {
        
        if (this.index < this.originalItems.length - 1) {
            this.index = this.index + 1;
            const currentItem = this.originalItems[this.index];

            this.setState({
                currentItem 
            });

            this.onChange(currentItem);
        } 
    }

    onPrevious = () => {
        if (this.index > 0 && this.originalItems.length > 0) {
            this.index = this.index - 1;
            const currentItem = this.originalItems[this.index];

            this.setState({
                currentItem 
            });

            this.onChange(currentItem);
        } 
    }

    onCircleClick = (item: ImageSliderItem) => {
        const { currentItem } = this.state;
        
        if (currentItem && (item.id !== currentItem.id)) {
            this.setState({
                currentItem: item
            });
    
            this.onChange(item);
        }
    }

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

    renderCircles = (images: ImageSliderItem[], currentImage?: ImageSliderItem) => {

        return (
            <SCirclesContainer>
                { images.map(imageItem => (
                    <Circle 
                        key={imageItem.id} 
                        item={imageItem}
                        isActive={imageItem.id === currentImage!!.id} 
                        onClick={this.onCircleClick}
                    />
                )) }
            </SCirclesContainer>
        );
    }

    render(): React.ReactNode {
        const { images, directionIconSize } = this.props;
        const { currentItem } = this.state;

        return (
            <SContainer>
                {images && images.length > 0 ? this.renderImages(images, currentItem) : null}

                <SRightButton onClick={this.onNext}>
                    <DirectionButton 
                        iconName="chevron-right" 
                        iconSize={directionIconSize}
                        disable={this.index === (this.originalItems.length - 1)}
                    />
                </SRightButton>
                <SLeftButton onClick={this.onPrevious}>
                    <DirectionButton 
                        iconName="chevron-left" 
                        iconSize={directionIconSize}
                        disable={this.index === 0}
                    />
                </SLeftButton>

                {images && images.length > 0 ? this.renderCircles(images, currentItem) : null}
            </SContainer>
        );
    }
}

export default Backdrop;