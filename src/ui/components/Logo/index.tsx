import React from 'react';

import {
    SContent, 
    SAppTitle
} from './styles';
import Icon from '@app/ui/components/Icon';

export interface Props {
    withTitle?: boolean;
}

class Logo extends React.Component<Props> {
    static defaultProps: Props;

    render(): React.ReactNode {
        const { withTitle } = this.props;

        return (
            <SContent>
                <Icon name="computer" width="35px" />
                {withTitle && <SAppTitle>React Tv Shows</SAppTitle>}
            </SContent>
        );
    }
}

Logo.defaultProps = {
    withTitle: false,
};

export default Logo;