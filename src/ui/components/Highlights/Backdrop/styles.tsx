import styled, { css } from '@app/config/styled';

interface BackdropImageProps {
    isVisible: boolean;
    height?: string;
}

export const SContainer = styled.div`
    position: relative;
    height: 100%;
`;

export const SImageContainer = styled.div<BackdropImageProps>`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: ${(props) => props.height || '400px'};
    transition: linear 0.8s;

    opacity: ${(props) => props.isVisible ? 1 : 0};

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #000;
        opacity: 0.6;
    }
`;

const DirectionButtonBase = css`
    position: absolute;
    top: 50%;
    margin-top: -40px;
    z-index: 5;

    &:active {
        transition: ease-in-out 0.3s;
        transform: scale(0.96);
    }
`;

export const SRightButton = styled.div`
    right: 0;

    ${DirectionButtonBase}
`;

export const SLeftButton = styled.div`
    left: 0;

    ${DirectionButtonBase}
`;

export const SCirclesContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;