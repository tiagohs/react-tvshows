import React from 'react';

import Home from '@app/ui/pages/Home';

import {
    SContent
} from './styles';
import HeaderContainer from '@app/ui/containers/HeaderContainer';
import SidebarContainer from '@app/ui/containers/SidebarContainer';
import PageContainer from '@app/ui/containers/PageContainer';

interface Props {
    getPopulars?: (page: number) => void;
}

class Root extends React.Component<Props> {
    
    render(): React.ReactNode {

        return (
            <div>
                <HeaderContainer />
                <SContent>
                    <SidebarContainer />
                    <PageContainer>
                        <Home />
                    </PageContainer>
                </SContent>
            </div>
        );
    }
}

export default Root;