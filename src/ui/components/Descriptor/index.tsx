
import React from 'react';
import { BaseTVShow } from '@app/core/models/TVShow';

import { 
    SDescriptorContainer,
    SItemName,
    SItemOverview,
    SButtonsContainer,
    STagsContainer,
} from './styles';
import Button from '@app/ui/components/Button';

interface Props {
    mainName?: string;
    item?: BaseTVShow;
    state?: string;
    duration?: number;
    renderTags?: () => React.ReactNode;
}

class Descriptor extends React.Component<Props> {
    static defaultProps: Props;

    props: Props;
    render(): React.ReactNode {
        const { item, renderTags, state, duration } = this.props;
        
        if (item) {
            
            return (
                <SDescriptorContainer>
                    <SItemName state={state} duration={duration}> {item.name} </SItemName>

                    <STagsContainer state={state} duration={duration}>
                        {renderTags && renderTags()}
                    </STagsContainer>

                    <SItemOverview state={state} duration={duration}> {item.overview} </SItemOverview>

                    <SButtonsContainer state={state} duration={duration}>
                        <Button color="primary" >Mais Informações</Button>
                    </SButtonsContainer>
                </SDescriptorContainer>
            );
        }
        
        return null;
    }
}

Descriptor.defaultProps = {
    mainName: ''
};

export default Descriptor;