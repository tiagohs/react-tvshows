import React from 'react';

import {
    SContent, 
    SAppTitle
} from './styles';
import Icon from '@app/ui/components/Icon';

interface Props {

}

const Logo = (props: Props) => (
    <SContent>
        <Icon name="computer" width="35px" />
        <SAppTitle>React Tv Shows</SAppTitle>
    </SContent>
);

export default Logo;