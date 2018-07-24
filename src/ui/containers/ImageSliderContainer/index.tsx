import React from 'react';

import {
    SImageSliderContainer
} from './styles';
import ImageSlider, { ImageSliderItem } from '@app/ui/components/ImageSlider';
import { BackdropLocalImages } from '@app/utils/Mocks/Images';
import Button from '@app/ui/components/Button';

interface Props {

}

interface State {
    currentItem: ImageSliderItem;
}

class ImageSliderContainer extends React.Component<Props, State> {
    static defaultProps: Props;

    private index: number = 0;

    constructor(props: Props) {
        super(props);

        this.state = {
            currentItem: BackdropLocalImages[this.index]
        };
    }

    onClick = () => {
        this.index = this.index + 1;

        this.setState({
            currentItem: BackdropLocalImages[this.index]
        });
    }

    render(): React.ReactNode {
        const { currentItem } = this.state;

        return (
            <div>
                <SImageSliderContainer>
                    <ImageSlider 
                        images={BackdropLocalImages} 
                        currentImage={currentItem}
                        height="400px" 
                    />
                </SImageSliderContainer>
                <Button onClick={this.onClick}>Next</Button>
            </div>
        );
    }
}

export default ImageSliderContainer;