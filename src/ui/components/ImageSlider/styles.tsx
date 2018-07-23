import styled from '@app/config/styled';

interface Props {
    isVisible: boolean;
    height?: string;
}

export const SContainer = styled.div`
    position: relative;
`;

export const SImageContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: ${(props: Props) => props.height || '400px'};
    transition: linear 0.5s;

    opacity: ${(props: Props) => props.isVisible ? 1 : 0};
`;
