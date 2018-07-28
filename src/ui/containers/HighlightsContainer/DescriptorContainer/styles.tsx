import styled from '@app/config/styled';
import { MEDIUM_DEVICES_BREAKPOINT } from '@app/ui/containers/BaseContainer';

export const STagsContainer = styled.div`
    display: flex;
`;

interface Props {
    state?: string;
}

export const SMainTitle = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    padding-left: 10px;
    color: ${props => props.theme.primaryTextColor};

    @media (min-width: ${MEDIUM_DEVICES_BREAKPOINT}px) {
        font-size: 14px;
        letter-spacing: 5px;
    }
`;

export const SFade = styled.div`
    opacity: 0;
    transition: opacity 0.5s;

    ${(props: Props) => {
        if (props.state === 'entering') {
            return 'opacity: 0';
        }

        if (props.state === 'entered') {
            return 'opacity: 1';
        }

        if (props.state === 'exiting') {
            return 'opacity: 0.98';
        }

        if (props.state === 'exiting') {
            return 'opacity: 0';
        }

        return '';
    }};
`;