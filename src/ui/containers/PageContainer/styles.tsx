import styled from '@app/config/styled';

interface Props {
    withSidebar?: boolean;
}

export const SPagesContainer = styled.div<Props>`
    width: 100%;
    padding-left: ${props => props.withSidebar ? '120px' : 0};
`;