import styled from '@app/config/styled';

interface Props {
    height?: string;
}

export const SContainer = styled.div<Props>`
    width: 100%;
    height: ${(props) => props.height || '400px'};
`;
