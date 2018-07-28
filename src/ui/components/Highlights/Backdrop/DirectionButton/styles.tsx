import styled, { css, keyframes } from '@app/config/styled';

interface Props {
    disable?: boolean;
}

const clickAnimation = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.8);
  }
`;

const disable = css`
    cursor: initial;
    opacity: 0.4;
`;

const enable = css`
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        animation: ${clickAnimation} 0.3s linear;
    }
`;

export const SContainer = styled.div<Props>`
    padding: 30px 20px;

    ${props => props.disable ? disable : enable}
`;