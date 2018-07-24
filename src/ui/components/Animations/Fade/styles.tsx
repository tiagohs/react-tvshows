
import styled from '@app/config/styled';

interface Props {
    state?: string;
}

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