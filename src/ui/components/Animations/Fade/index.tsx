import React from 'react';
import { Transition } from 'react-transition-group';

import {
    SFade
} from './styles';

interface Props {
    duration?: number;
    children?: React.ReactNode;
    state?: string;
    show?: boolean;
    onExit?: () => void;
}

class Fade extends React.Component<Props> {
    static defaultProps: Props;

    props: Props;
    onExit = () => {
        const { onExit } = this.props;

        if (onExit) {
            onExit();
        }
    }

    renderFade = (children: React.ReactNode, state: string) => {
        return (
        <SFade state={state}>
            {children}
        </SFade>);
    }

    render(): React.ReactNode {
        const { children, show } = this.props;

        return (
            <Transition
                in={show}
                timeout={500} 
                onExited={this.onExit}
            >
                {(state: string) => this.renderFade(children, state)}
            </Transition>
        );
    }
}

Fade.defaultProps = {
    duration: 500
};

export default Fade;