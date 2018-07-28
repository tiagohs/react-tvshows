import React from 'react';

import {
    SPagesContainer
} from './styles';
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
    withSidebar?: boolean;
}

class PageContainer extends BaseContainer<Props, State> {
    
    constructor(props: Props) {
        super(props);

    } 

    onGetSmallDevicesConfiguration(): State {
        return {
            currentBreakpoint: SMALL_DEVICES_BREAKPOINT,
            withSidebar: false
        };
    }

    onGetMediumDevicesConfiguration(): State {
        return {
            currentBreakpoint: MEDIUM_DEVICES_BREAKPOINT,
            withSidebar: false
        };
    }

    onGetLargeDevicesConfiguration(): State {
        return {
            currentBreakpoint: LARGE_DEVICES_BREAKPOINT,
            withSidebar: false
        };
    }

    onGetExtraLargeDevicesConfiguration(): State {
        return {
            currentBreakpoint: EXTRA_LARGE_DEVICES_BREAKPOINT,
            withSidebar: true
        };
    }
    
    render(): React.ReactNode {
        const { children } = this.props;
        const { withSidebar } = this.state;
        
        return (
            <SPagesContainer withSidebar={withSidebar}>
                {children}
            </SPagesContainer>
        );
    }
}

export default PageContainer;