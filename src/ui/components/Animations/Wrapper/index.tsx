import React from 'react';

interface Props {
    duration?: number;
    children?: React.ReactNode;
    state?: string;
}

class Wrapper extends React.Component<Props> {
    static defaultProps: Props;

    props: Props;

    render(): React.ReactNode {
       return <span>{this.props.state && this.props.state}</span>;
    }
}

export default Wrapper;