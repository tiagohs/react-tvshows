import styled from '@app/config/styled';

interface Props {
    color?: string;
}

export const SItem = styled.div<Props>`
    padding: 0 10px;
    min-width: 275px;
    height: 410px;
    padding: 0 5px;
    background-color: ${props => props.color};
`;
