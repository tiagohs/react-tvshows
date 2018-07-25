import styled from '@app/config/styled';

interface Props {
    height?: string;
}

export const SHighlightsContainer = styled.div<Props>`
    position: relative;
    height: ${props => props.height || '100%'};
`;

export const SBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
`;

export const SDescriptor = styled.div`
    position: absolute;
    left: 60px;
    bottom: 65px;
    width: 40%;
    z-index: 1;
`;

export const SPoster = styled.div`
    position: absolute;
    right: 200px;
    bottom: 65px;
    display: flex;
    justify-content: center;
    z-index: 1;
`;