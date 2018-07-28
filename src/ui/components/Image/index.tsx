import React from 'react';

import {
    SContainer,
    SImage,
    SPlaceholder
} from './styles';

interface Props {
    src?: string;
    placeholder?: string;
    width?: string;
    height?: string;
    size?: string;
    circular?: boolean;
}

interface State {
    src?: string;
    loading: boolean;
    loaded: boolean;
    error: boolean;
}

const defaultPlaceholder = require('@app/assets/img/placeholder.jpg');

class Image extends React.Component<Props, State> {
    static defaultProps: Props;

    static getDerivedStateFromProps(props: Props, state: State) {
        
        if (props.src !== state.src) {
            return {
                src: props.src,
                loading: true,
                loaded: false,
                error: false
            };
        } 

        return null;
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            src: props.src,
            loading: true,
            loaded: false,
            error: false
        };
    }

    onError = () => {
        this.setState({
            src: defaultPlaceholder,
            error: true
        });
    }

    onLoad = () => {
        this.setState({
            loading: false,
            loaded: true,
            error: false
        });
    }

    renderPlaceholder = () => {
        const { size, width, height, placeholder, circular } = this.props;
        const { loaded, error } = this.state;

        return (!loaded && !error) && (
            <SPlaceholder
                src={placeholder}
                size={size}
                width={width}
                height={height} 
                circular={circular}
            />
        ); 
    }

    render(): React.ReactNode {
        const { size, width, height, placeholder, circular } = this.props;
        const { src, loading } = this.state;

        return (
            <SContainer 
                height={height} 
            >
                {this.renderPlaceholder()}
                <SImage 
                    key={src}
                    src={src}
                    size={size}
                    width={width}
                    height={height} 
                    placeholder={placeholder}
                    onError={this.onError}
                    onLoad={this.onLoad}
                    loading={loading}
                    circular={circular}
                />
                
            </SContainer>
        );
    } 
}

Image.defaultProps = {
    size: 'cover',
    width: '100%',
    height: '100%',
    placeholder: defaultPlaceholder,
    circular: false
};

export default Image;