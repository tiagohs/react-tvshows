import React from 'react';

import {
    SContent, 
    SInput
} from './styles';
import Icon from '@app/ui/components/Icon';

interface Props {
    
}

interface State {
    show: boolean;
}

class SearchBar extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        
        this.state = {
            show: false
        };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }
    
    render(): React.ReactNode {
        const { show } = this.state;

        return (
            <SContent>
                <SInput type="text" placeholder="Procure por alguma série" show={show} />
                <Icon 
                    name="search" 
                    size={18} 
                    color="#fff"
                    clickable={true}
                    onClick={this.onClick}
                />
            </SContent>
        );
    }
}

export default SearchBar;