import React from 'react';

import {
    SContainer,
    SImage
} from './styles';

interface Props {
    src?: string;
    placeholder?: string;
    width?: string;
    height?: string;
    size?: string;
}

interface State {
    src?: string;
}

const defaultPlaceholder = require('@app/assets/img/placeholder.jpg');

class Image extends React.Component<Props, State> {
    static defaultProps: Props;

    constructor(props: Props) {
        super(props);

        this.state = {
            src: props.src
        };
    }

    onError = () => {
        this.setState({
            src: defaultPlaceholder
        });
    }

    render(): React.ReactNode {
        const { size, width, height, placeholder } = this.props;
        const { src } = this.state;

        return (
            <SContainer>
                <SImage 
                    src={src}
                    size={size}
                    width={width}
                    height={height} 
                    placeholder={placeholder}
                    onError={this.onError}
                />
            </SContainer>
        );
    } 
}

Image.defaultProps = {
    size: 'cover',
    width: '100%',
    height: '100%',
    placeholder: defaultPlaceholder
};

export default Image;