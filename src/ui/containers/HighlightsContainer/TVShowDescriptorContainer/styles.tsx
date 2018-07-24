import styled from '@app/config/styled';

export const STagsContainer = styled.div`
    display: flex;
`;

interface Props {
    state?: string;
}

export const SMainTitle = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 5px;
    padding-left: 10px;
    color: ${props => props.theme.primaryTextColor};
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