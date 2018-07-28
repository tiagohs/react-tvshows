import styled, { css } from '@app/config/styled';
import { MEDIUM_DEVICES_BREAKPOINT } from '@app/ui/containers/BaseContainer';

interface Props {
    disable?: boolean;
}

const disable = css`
    cursor: initial;
    opacity: 0.4;
`;

export const SContainer = styled.div<Props>`
    padding: 20px 10px;

    ${props => props.disable && disable}

    @media (min-width: ${MEDIUM_DEVICES_BREAKPOINT}px) {
        padding: 30px 20px;
    }
`;