import React from 'react';

import {
    STagContainer
} from './styles';

interface Props {
    text?: string;
    backgroundColor?: string;
    outline?: boolean;
    outlineColor?: string;
}

class Tag extends React.Component<Props> {
    static defaultProps: Props;

    props: Props;
    render(): React.ReactNode {
        const { text } = this.props;

        return text && (
            <STagContainer {...this.props}>
                {text}
            </STagContainer>
        );
    }
}

Tag.defaultProps = {
    outline: false
};

export default Tag;