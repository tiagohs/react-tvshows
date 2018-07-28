import React from 'react';

import {
    SName,
    SUserContainer,
    SContent
} from './styles';
import SubMenu from '@app/ui/components/SubMenu';
import Image from '@app/ui/components/Image';

export interface UserBarProps {
    withName?: boolean;
}

interface State {
    show: boolean;
}

const profileImage = require('@app/assets/img/perfil.jpg');

class UserBar extends React.Component<UserBarProps, State> {
    static defaultProps: UserBarProps;

    constructor(props: UserBarProps) {
        super(props);
        
        this.state = {
            show: false,
        };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }
    
    render(): React.ReactNode {
        const { withName } = this.props;
        const { show } = this.state;

        return (
            <SContent>
                <SUserContainer onClick={this.onClick}>
                    {withName && <SName>Tiago Henrique</SName>}
                    <Image 
                        src={profileImage} 
                        width="35px"
                        height="35px"
                        circular={true}
                    />
                </SUserContainer>
                <SubMenu show={show}>
                    <span>OI</span>
                </SubMenu>
            </SContent>
        );
    }
}

UserBar.defaultProps = {
    withName: false
};

export default UserBar;