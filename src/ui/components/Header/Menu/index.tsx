import React from 'react';

import {
    SContent,
    SMenuOptions,
    SOptionsContainer
} from './styles';
import Icon from '@app/ui/components/Icon';
import MenuItem from '@app/ui/components/Header/MenuItem';
import SearchBar from '@app/ui/components/SearchBar';
import NotificationBar from '@app/ui/components/NotificationBar';
import { Transition } from 'react-transition-group';

interface Props {

}

interface State {
    show?: boolean;
}

class Menu extends React.Component<Props, State> {
    static defaultProps: Props;

    constructor(props: Props) {
        super(props);

        this.state = {
            show: false
        };
    }

    onMenuClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    renderMenu = () => {
        const { show } = this.state;

        return show && (
                <Transition
                    in={show}
                    timeout={300} 
                >
                    {
                        (state: string) => (
                            <SMenuOptions state={state} >
                                <SOptionsContainer>
                                    <SearchBar />
                                    <NotificationBar />
                                </SOptionsContainer>
                                <MenuItem
                                    name="home"
                                    title="Página Inicial"
                                    router="/home"
                                />
                                <MenuItem
                                    name="user-circle"
                                    title="Atores e Atrizes"
                                    router="/home"
                                />
                                <MenuItem
                                    name="list"
                                    title="Para Assistir"
                                    router="/home"
                                />
                                <MenuItem
                                    name="heart"
                                    title="Favoritos"
                                    router="/home"
                                />
                            </SMenuOptions>
                         )
                    }
                </Transition>
        );
    }

    render(): React.ReactNode {
        
        return (
            <SContent>
                <Icon 
                    clickable={true} 
                    name="list" 
                    size={18} 
                    color="#fff"
                    onClick={this.onMenuClick}
                />
                {this.renderMenu()}
            </SContent>
        );
    }
}

export default Menu;