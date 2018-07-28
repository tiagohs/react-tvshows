import React from 'react';

import {
    SContent,
    SRight,
    SLeft,
} from './styles';
import Logo, { Props as LogoProps } from '@app/ui/components/Logo';
import SearchBar from '@app/ui/components/SearchBar';
import NotificationBar from '@app/ui/components/NotificationBar';
import UserBar, { UserBarProps } from '@app/ui/components/UserBar';
import Menu from '@app/ui/components/Header/Menu';

interface Props {
    withMenu?: boolean;
    withExtraOptions?: boolean;
    getPopulars?: (page: number) => void;

    logoProps?: LogoProps;
    userBarConfig?: UserBarProps;
}

class Header extends React.Component<Props> {
    static defaultProps: Props;

    render(): React.ReactNode {
        const { logoProps, userBarConfig, withMenu, withExtraOptions } = this.props;
        
        return (
            <SContent>
                <SLeft>
                    <Logo {...logoProps} />
                </SLeft>
                <SRight>
                    {withExtraOptions && <SearchBar />}
                    {withExtraOptions && <NotificationBar />}

                    <UserBar {...userBarConfig} />
                    {withMenu && <Menu />}
                </SRight>
            </SContent>
        );
    }
}

Header.defaultProps = {
    withMenu: false,
    logoProps: {
        withTitle: false
    }
};

export default Header;