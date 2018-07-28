import React from 'react';

import {
    SContent, 
    SIconContainer
} from './styles';
import Icon from '@app/ui/components/Icon';
import SubMenu from '@app/ui/components/SubMenu';

interface Props {
    
}

interface State {
    show: boolean;
    numberOfMessages: number;
}

class NotificationBar extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        
        this.state = {
            show: false,
            numberOfMessages: 3
        };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }
    
    render(): React.ReactNode {
        const { show, numberOfMessages } = this.state;

        return (
            <SContent>
                <SIconContainer 
                    onClick={this.onClick} 
                    number={numberOfMessages}
                >
                    <Icon 
                        name="bell" 
                        size={18} 
                        color="#fff"
                    />
                </SIconContainer>
                <SubMenu show={show}>
                    <span>OI</span>
                </SubMenu>
            </SContent>
        );
    }
}

export default NotificationBar;