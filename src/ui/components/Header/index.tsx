import React from 'react';

import {
    SContent,
    SRight,
} from './styles';
import Logo from '@app/ui/components/Logo';
import SearchBar from '@app/ui/components/SearchBar';
import NotificationBar from '@app/ui/components/NotificationBar';
import UserBar from '@app/ui/components/UserBar';

interface Props {
    getPopulars?: (page: number) => void;
}

class Header extends React.Component<Props> {
    
    render(): React.ReactNode {

        return (
            <SContent>
                <Logo />
                <SRight>
                    <SearchBar />
                    <NotificationBar />
                    <UserBar />
                </SRight>
            </SContent>
        );
    }
}

export default Header;