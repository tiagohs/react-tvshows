
import React from 'react';
import { Transition } from 'react-transition-group';
import Wrapper from '@app/ui/components/Animations/Wrapper';

interface Props {
    duration?: number;
    children?: React.ReactNode;
    show?: boolean;
    onExit?: () => void;
}

interface ChildrenProps {
    state?: string;
}

class Animator extends React.Component<Props> {
    static defaultProps: Props;

    props: Props;
    renderChildrens = (state: string): React.ReactNode => {
        return React.Children.map(this.props.children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement<ChildrenProps>(child, {
                    state: state
                  });
            }

            return null;
        });
    }

    render(): React.ReactNode {
        const { show, duration, onExit } = this.props;
        
        return (
            <Transition
                in={show} 
                timeout={duration || 500} 
                onExited={onExit}
                {...this.props}
            >
                {(state: string) => <Wrapper state={state} />}
            </Transition>
        );
    }
}

export default Animator;