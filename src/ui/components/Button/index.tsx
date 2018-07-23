import React, { MouseEvent } from 'react';

import {
    SButton
} from './styles';

interface Props {
    color?: string;
    children?: React.ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

class Button extends React.Component<Props> {
    static defaultProps: Props;

    onClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { onClick } = this.props;

        if (onClick) {
            onClick(event);
        }
    }

    render(): React.ReactNode {
        const { children } = this.props;

        return (
            <SButton {...this.props} onClick={this.onClick}>
                {children}
            </SButton>
        );
    }
}

Button.defaultProps = {
    color: 'primary'
};

export default Button;