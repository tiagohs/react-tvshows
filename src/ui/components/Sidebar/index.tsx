import React from 'react';

import {
    SContent
} from './styles';
import SidebarButton from '@app/ui/components/Sidebar/Button';

interface Props {
    getPopulars?: (page: number) => void;
}

class Sidebar extends React.Component<Props> {
    
    render(): React.ReactNode {

        return (
            <SContent>
                <SidebarButton
                    name="home"
                    title="Página Inicial"
                    router="/home"
                />
                <SidebarButton
                    name="user-circle"
                    title="Atores e Atrizes"
                    router="/home"
                />
                <SidebarButton
                    name="list"
                    title="Para Assistir"
                    router="/home"
                />
                <SidebarButton
                    name="heart"
                    title="Favoritos"
                    router="/home"
                />
            </SContent>
        );
    }
}

export default Sidebar;