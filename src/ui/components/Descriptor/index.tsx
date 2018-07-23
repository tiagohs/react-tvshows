
import React from 'react';
import { BaseTVShow } from '@app/core/models/TVShow';

import { 
    SDescriptorContainer,
    SMainTitle,
    SItemName,
    SItemOverview
} from './styles';
import Button from '@app/ui/components/Button';

interface Props {
    mainName?: string;
    item?: BaseTVShow;
    renderTags?: () => React.ReactNode;
}

class Descriptor extends React.Component<Props> {
    static defaultProps: Props;

    props: Props;
    render(): React.ReactNode {
        const { item, mainName, renderTags } = this.props;
        
        if (item) {
            
            return (
                <SDescriptorContainer>
                    <SMainTitle> {mainName} </SMainTitle>
                    <SItemName> {item.name} </SItemName>

                    {renderTags && renderTags()}

                    <SItemOverview> {item.overview} </SItemOverview>
    
                    <Button color="primary" >Mais Informações</Button>
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