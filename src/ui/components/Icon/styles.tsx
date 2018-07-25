import styled from '@app/config/styled';

interface Props {
    size?: number;
    color?: string;
}

export const SIcon = styled.i<Props>`
    font-size: ${props => props.size || 14}px;
    color: ${props => props.color || props.theme.primaryColor};
`;
