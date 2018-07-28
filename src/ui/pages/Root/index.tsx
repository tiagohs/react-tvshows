import React from 'react';

import Header from '@app/ui/components/Header';
import Home from '@app/ui/pages/Home';

import {
    SContent,
    SSidebarContainer,
    SPagesContainer,
    SHeaderContainer
} from './styles';
import Sidebar from '@app/ui/components/Sidebar';

interface Props {
    getPopulars?: (page: number) => void;
}

class Root extends React.Component<Props> {
    
    render(): React.ReactNode {

        return (
            <div>
                <SHeaderContainer>
                    <Header />
                </SHeaderContainer>
                <SContent>
                    <SSidebarContainer>
                        <Sidebar />
                    </SSidebarContainer>
                    <SPagesContainer>
                        <Home />
                    </SPagesContainer>
                </SContent>
            </div>
        );
    }
}

export default Root;