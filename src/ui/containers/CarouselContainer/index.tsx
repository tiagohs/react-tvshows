import React from 'react';

import {
    SItem
} from './styles';
import Carousel from '@app/ui/components/Carousel';

interface Props {
   
}

class CarouselContainer extends React.Component<Props> {
    static defaultProps: Props;

    render(): React.ReactNode {

        return (
            <Carousel>
                <SItem 
                    className="carousel-item" 
                    color="red"
                />
                <SItem 
                    className="carousel-item" 
                    color="blue"
                />
                <SItem 
                    className="carousel-item" 
                    color="green"
                />
                <SItem 
                    className="carousel-item" 
                    color="white"
                />
                <SItem 
                    className="carousel-item" 
                    color="red"
                />
                <SItem 
                    className="carousel-item" 
                    color="blue"
                />
            </Carousel>
        );
    }
}

export default CarouselContainer;