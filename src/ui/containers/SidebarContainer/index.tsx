import React from 'react';

import {
    SSidebarContainer
} from './styles';
import Sidebar from '@app/ui/components/Sidebar';
import BaseContainer, { 
    SMALL_DEVICES_BREAKPOINT,
    EXTRA_LARGE_DEVICES_BREAKPOINT,
    LARGE_DEVICES_BREAKPOINT,
    MEDIUM_DEVICES_BREAKPOINT, 
    BaseState
} from '@app/ui/containers/BaseContainer';

interface Props {
    
}

interface State extends BaseState {
    showSidebar?: boolean;
}

class SidebarContainer extends BaseContainer<Props, State> {
    
    constructor(props: Props) {
        super(props);
    } 

    onGetSmallDevicesConfiguration(): State {
        return {
            currentBreakpoint: SMALL_DEVICES_BREAKPOINT,
            showSidebar: false
        };
    }

    onGetMediumDevicesConfiguration(): State {
        return {
            currentBreakpoint: MEDIUM_DEVICES_BREAKPOINT,
            showSidebar: false
        };
    }

    onGetLargeDevicesConfiguration(): State {
        return {
            currentBreakpoint: LARGE_DEVICES_BREAKPOINT,
            showSidebar: false
        };
    }

    onGetExtraLargeDevicesConfiguration(): State {
        return {
            currentBreakpoint: EXTRA_LARGE_DEVICES_BREAKPOINT,
            showSidebar: true
        };
    }
    
    render(): React.ReactNode {
        const { showSidebar } = this.state;

        return showSidebar && (
            <SSidebarContainer>
                <Sidebar />
            </SSidebarContainer>
        );
    }
}

export default SidebarContainer;