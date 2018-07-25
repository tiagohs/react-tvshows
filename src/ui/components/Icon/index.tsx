import React from 'react';

import {
    SIcon
} from './styles';

interface Props {
    name: string;
    size?: number;
    color?: string;
}

const Icon = (props: Props) => (
    <SIcon className={`fa fa-${props.name}`} size={props.size} color={props.color} />
);

export default Icon;