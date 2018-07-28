import React from 'react';

import {
    SContainer
} from './styles';
import Icon from '@app/ui/components/Icon';
import { withTheme } from '@app/config/styled';
import { Theme } from '@app/config/styled/models';

export interface ImageSliderItem {
    id: number;
    imageUrl: string;
}

interface Props {
    iconName: string;
    iconSize?: number;
    disable?: boolean;
    onClick?: () => void;
    theme: Theme;
}

class DirectionButton extends React.Component<Props> {
    static defaultProps: Props;

    onClick = () => {
        const { onClick } = this.props;

        if (onClick) {
            onClick();
        }
    }

    render(): React.ReactNode {
        const { iconName, iconSize, theme, disable } = this.props;

        return (
            <SContainer disable={disable} >
                <Icon 
                    size={iconSize || 50} 
                    name={iconName} 
                    color={theme.primaryLightColor} 
                    onClick={this.onClick} 
                    clickable={!disable}
                />
            </SContainer>
        );
    }
}

export default withTheme(DirectionButton);