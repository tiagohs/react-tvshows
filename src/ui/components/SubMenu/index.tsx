import React from 'react';

import {
    SNotificationMessagesContainer
} from './styles';
interface Props {
    show?: boolean;
    children?: React.ReactNode;
}

interface State {
    numberOfMessages: number;
}

class SubMenu extends React.Component<Props, State> {
    static defaultProps: Props;

    render(): React.ReactNode {
        const { show, children } = this.props;

        return (
            <SNotificationMessagesContainer show={show}>
                {children}
            </SNotificationMessagesContainer>
        );
    }
}

SubMenu.defaultProps = {
    show: true
};

export default SubMenu;