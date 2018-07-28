import React from 'react';

import {
    SIcon, SLocalIcon
} from './styles';
import ComputerIcon from '@app/assets/icons/computer';

interface Props {
    name: string;
    size?: number;
    color?: string;
    width?: string;
    height?: string;

}

const localIcons = {
    'computer': ComputerIcon
};

const Icon = (props: Props) => {
    const LocalIcon = localIcons[props.name];

    if (LocalIcon) {
        return (
            <SLocalIcon {...props}>
                <LocalIcon />
            </SLocalIcon>
        );
    }

    return (
        <SIcon className={`fa fa-${props.name}`} size={props.size} color={props.color} />
    );
};

export default Icon;