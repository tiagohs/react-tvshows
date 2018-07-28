import styled from '@app/config/styled';

interface Props {
    size?: number;
    color?: string;
    width?: string;
    height?: string;
}

export const SIcon = styled.i<Props>`
    font-size: ${props => props.size || 14}px;
    color: ${props => props.color || props.theme.primaryColor};
`;

export const SLocalIcon = styled.div<Props>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    color: ${props => props.color || props.theme.primaryColor};
`;
