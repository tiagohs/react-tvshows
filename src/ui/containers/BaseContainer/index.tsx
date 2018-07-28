import React from 'react';

export interface BaseState {
    currentBreakpoint?: number;
}

export const SMALL_DEVICES_BREAKPOINT = 576;
export const MEDIUM_DEVICES_BREAKPOINT = 768;
export const LARGE_DEVICES_BREAKPOINT = 992;
export const EXTRA_LARGE_DEVICES_BREAKPOINT = 1200;

abstract class BaseContainer<P, S extends BaseState> extends React.Component<P, S> {

    abstract onGetExtraLargeDevicesConfiguration(): S | undefined;
    abstract onGetSmallDevicesConfiguration(): S | undefined;
    abstract onGetMediumDevicesConfiguration(): S | undefined;
    abstract onGetLargeDevicesConfiguration(): S | undefined;

    constructor(props: P) {
        super(props);

        const newState = this.onGetContainerConfiguration();

        if (newState) {
            this.state = newState;
        }
    }

    componentDidMount() {
        this.updateDimensions();

        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    isSmallContainer = (currentScreenWidth: number): boolean => {
        return currentScreenWidth < SMALL_DEVICES_BREAKPOINT;
    }

    isMediumContainer = (currentScreenWidth: number): boolean => {
        return currentScreenWidth >= SMALL_DEVICES_BREAKPOINT && currentScreenWidth < MEDIUM_DEVICES_BREAKPOINT;
    }

    isLargeContainer = (currentScreenWidth: number): boolean => {
        return currentScreenWidth >= MEDIUM_DEVICES_BREAKPOINT && currentScreenWidth < LARGE_DEVICES_BREAKPOINT;
    }

    isExtraLargeContainer = (currentScreenWidth: number): boolean => {
        return currentScreenWidth >= LARGE_DEVICES_BREAKPOINT;
    }

    updateDimensions = () => {
        const currentScreenWidth = window.innerWidth;
        const { currentBreakpoint } = this.state;

        if ( ( this.isSmallContainer(currentScreenWidth) && currentBreakpoint !== SMALL_DEVICES_BREAKPOINT ) ||
             ( this.isMediumContainer(currentScreenWidth) && currentBreakpoint !== MEDIUM_DEVICES_BREAKPOINT ) ||
             ( this.isLargeContainer(currentScreenWidth) && currentBreakpoint !== LARGE_DEVICES_BREAKPOINT ) ||
             ( this.isExtraLargeContainer(currentScreenWidth) && currentBreakpoint !== EXTRA_LARGE_DEVICES_BREAKPOINT ) ) {
                const newState = this.onGetContainerConfiguration();

                if (newState) {
                    this.setState(newState);
                }
        } 
    }

    onGetContainerConfiguration = (): S | undefined => {
        const currentScreenWidth = window.innerWidth;

        if (this.isSmallContainer(currentScreenWidth)) {
            return this.onGetSmallDevicesConfiguration();
        } else if (this.isMediumContainer(currentScreenWidth)) {
            return this.onGetMediumDevicesConfiguration();
        } else if (this.isLargeContainer(currentScreenWidth)) {
            return this.onGetLargeDevicesConfiguration();
        } else if (this.isExtraLargeContainer(currentScreenWidth)) {
            return this.onGetExtraLargeDevicesConfiguration();
        } else {
            return this.onGetSmallDevicesConfiguration();
        }
    }

}

export default BaseContainer;