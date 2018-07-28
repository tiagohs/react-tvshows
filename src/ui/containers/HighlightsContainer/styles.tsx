import styled from '@app/config/styled';
import { MEDIUM_DEVICES_BREAKPOINT } from '@app/ui/containers/BaseContainer';

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

export const SDescriptor = styled.div<Props>`
    position: absolute;
    left: 35px;
    right: 35px;
    top: 40px;
    width: auto;
    z-index: 1;

    @media (min-width: ${MEDIUM_DEVICES_BREAKPOINT}px) {
        left: 60px;
        right: 60px;
        top: 140px;
        width: 40%;
    }
`;

export const SPoster = styled.div`
    position: absolute;
    right: 60px;
    bottom: 65px;
    width: 40%;
    display: flex;
    justify-content: center;
    z-index: 1;
`;