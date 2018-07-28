import React from 'react';

import {
    SContent
} from './styles';
import { BaseTVShow } from '@app/core/models/TVShow';
import Button from '@app/ui/components/Button';

interface Props {
    slideWidth?: number;
    items?: BaseTVShow;
    children?: React.ReactNode;
}

interface State {
    currentIndex: number;
    carouselWidth?: string;
    currentOffset: number;
}

class Carousel extends React.Component<Props, State> {
    
    static defaultProps: Props;

    carousel: React.RefObject<HTMLDivElement>;
    
    constructor(props: Props) {
        super(props);

        this.state = {
            currentIndex: 0,
            carouselWidth: '0',
            currentOffset: 0,
        };
        
        this.carousel = React.createRef();
    }

    getChildNodes = () => {
        return this.carousel.current ? this.carousel.current.childNodes : [];
    }

    componentDidMount() {
        this.getChildNodes();

        this.setState({
            carouselWidth: `${this.carousel.current!!.offsetWidth}px`
        });
    }

    onNext = () => {
        const { currentIndex } = this.state;
        const childNodes = this.getChildNodes();

        if (currentIndex < ( childNodes.length - 1 )) {
            const currentChildren = childNodes[currentIndex];

            const slideWidth = (currentChildren as HTMLElement).offsetWidth;
            const total = currentIndex > 0 ? slideWidth * ( currentIndex + 1) : slideWidth;
            const newOffset = total / 2;
            
            for (var i = 0; i < childNodes.length; i++) {
                this.carousel.current!!.style.transform = `translate(-${newOffset}px)`;
                this.carousel.current!!.style.transition = 'all 0.5s';
                (childNodes[i] as HTMLElement).style.transform = `translate(-${newOffset}px)`;
                (childNodes[i] as HTMLElement).style.transition = 'all 0.5s';
            }

            this.setState({
                currentIndex: currentIndex + 1,
                currentOffset: newOffset
            });
        }
    }

    onPrevious = () => {
        const { currentIndex, currentOffset } = this.state;
        const childNodes = this.getChildNodes();

        if (currentIndex > 0) {
            const currentChildren = childNodes[currentIndex];

            const slideWidth = (currentChildren as HTMLElement).offsetWidth;
            const newCurrentOffset = currentOffset - slideWidth ;

            const formatOffset = newCurrentOffset > 0 ? `-${(Math.abs(newCurrentOffset))}px` : `${(Math.abs(newCurrentOffset))}px`;

            for (var i = 0; i < childNodes.length; i++) {
                this.carousel.current!!.style.transform = `translate(${formatOffset})`;
                this.carousel.current!!.style.transition = 'all 0.5s';
            }
            
            this.setState({
                currentIndex: currentIndex - 1,
                currentOffset: newCurrentOffset
            });
        }
    }

    render(): React.ReactNode {
        const { carouselWidth } = this.state;

        return (
            <SContent>
                <div 
                    ref={this.carousel}
                    className="carousel-container"
                    style={{ display: 'flex', width: carouselWidth }}
                >
                    {this.props.children}
                </div>
                <Button onClick={this.onNext}>Next</Button>
                <Button onClick={this.onPrevious}>Previous</Button>
            </SContent>
        );
    }
}

export default Carousel;