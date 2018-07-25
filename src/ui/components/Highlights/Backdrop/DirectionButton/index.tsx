import React, { MouseEvent }  from 'react';

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
    disable?: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    theme: Theme;
}

class DirectionButton extends React.Component<Props> {
    static defaultProps: Props;

    onClick = (event: MouseEvent<HTMLDivElement>) => {
        const { onClick } = this.props;

        if (onClick) {
            onClick(event);
        }
    }

    render(): React.ReactNode {
        const { iconName, theme, disable } = this.props;

        return (
            <SContainer onClick={this.onClick} disable={disable}>
                <Icon size={50} name={iconName} color={theme.primaryLightColor} />
            </SContainer>
        );
    }
}

export default withTheme(DirectionButton);