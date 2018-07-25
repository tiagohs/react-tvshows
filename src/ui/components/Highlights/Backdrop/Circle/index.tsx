import React, { MouseEvent }  from 'react';

import {
    SCircle
} from './styles';

export interface ImageSliderItem {
    id: number;
    imageUrl: string;
}

interface Props {
    item: ImageSliderItem;
    isActive?: boolean;
    onClick?: (item: ImageSliderItem) => void;
}

class Circle extends React.Component<Props> {
    static defaultProps: Props;

    onClick = (event: MouseEvent<HTMLDivElement>) => {
        const { onClick, item } = this.props;

        if (onClick) {
            onClick(item);
        }
    }

    render(): React.ReactNode {
        const { item, isActive } = this.props;

        return (
            <SCircle 
                key={item.id} 
                isActive={isActive} 
                onClick={this.onClick}
            />
        );
    }
}

export default Circle;