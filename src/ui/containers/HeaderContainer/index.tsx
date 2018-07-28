import React from 'react';

import Header from '@app/ui/components/Header';
import { Props as LogoProps } from '@app/ui/components/Logo';

import {
    SHeaderContainer
} from './styles';
import BaseContainer, { 
    SMALL_DEVICES_BREAKPOINT,
    EXTRA_LARGE_DEVICES_BREAKPOINT,
    LARGE_DEVICES_BREAKPOINT,
    MEDIUM_DEVICES_BREAKPOINT,
    BaseState 
} from '@app/ui/containers/BaseContainer';
import { UserBarProps } from '@app/ui/components/UserBar';

interface Props {
    getPopulars?: (page: number) => void;
}

interface State extends BaseState {
    withMenu?: boolean;
    withExtraOptions?: boolean;
    logoConfig?: LogoProps; 
    userBarConfig?: UserBarProps;
}

class HeaderContainer extends BaseContainer<Props, State> {
    
    constructor(props: Props) {
        super(props);
    } 

    onGetSmallDevicesConfiguration(): State {
        return {
            currentBreakpoint: SMALL_DEVICES_BREAKPOINT,
            withMenu: true,
            withExtraOptions: false,
            logoConfig: {
                withTitle: false
            },
            userBarConfig: {
                withName: false
            }
        };
    }

    onGetMediumDevicesConfiguration(): State {
        return {
            currentBreakpoint: MEDIUM_DEVICES_BREAKPOINT,
            withMenu: true,
            withExtraOptions: false,
            logoConfig: {
                withTitle: false
            },
            userBarConfig: {
                withName: false
            }
        };
    }

    onGetLargeDevicesConfiguration(): State {
        return {
            currentBreakpoint: LARGE_DEVICES_BREAKPOINT,
            withMenu: true,
            withExtraOptions: false,
            logoConfig: {
                withTitle: false
            },
            userBarConfig: {
                withName: false
            }
        };
    }

    onGetExtraLargeDevicesConfiguration(): State {
        return {
            currentBreakpoint: EXTRA_LARGE_DEVICES_BREAKPOINT,
            withMenu: false,
            withExtraOptions: true,
            logoConfig: {
                withTitle: true
            },
            userBarConfig: {
                withName: true
            }
        };
    }
     
    render(): React.ReactNode {
        const { 
            logoConfig, 
            userBarConfig,
            withMenu,
            withExtraOptions 
        } = this.state;

        return (
            <SHeaderContainer>
                <Header 
                    logoProps={logoConfig}
                    userBarConfig={userBarConfig}
                    withMenu={withMenu}
                    withExtraOptions={withExtraOptions}
                />
            </SHeaderContainer>
        );
    }
}

export default HeaderContainer;