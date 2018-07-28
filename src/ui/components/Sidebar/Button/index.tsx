import React from 'react';

import {
    SContent, STitle
} from './styles';
import Icon from '@app/ui/components/Icon';
import { Theme } from '@app/config/styled/models';
import { withTheme } from '@app/config/styled';

interface Props {
    name: string;
    title: string;
    onClick?: (router: string) => void;
    router: string;
    theme: Theme;
}

class SidebarButton extends React.Component<Props> {
    
    onClick = () => {
        const { onClick, router } = this.props;

        if (onClick) {
            onClick(router);
        }
    }

    render(): React.ReactNode {
        const { name, theme, title } = this.props;

        return (
            <SContent onClick={this.onClick}>
                <Icon 
                    name={name} 
                    color={theme.secondaryTextColor}
                    size={40}
                />
                {title && (<STitle>{title}</STitle>)}
            </SContent>
        );
    }
}

export default withTheme(SidebarButton);