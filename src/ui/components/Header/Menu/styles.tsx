import styled, { keyframes } from '@app/config/styled';

interface Props {
    state?: string;
}

export const SContent = styled.div`
    padding: 0 20px;
`;

const enter = keyframes`
  from {
    max-height: 0;
    opacity:  0
  }

  to {
    max-height: 200px;
    opacity:  1;
  }
`;

const exit = keyframes`
  from {
    max-height: 200px;
    opacity:  1;
  }

  to {
    max-height: 0;
    opacity:  0;
  }
`;

export const SMenuOptions = styled.div<Props>`
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    background: #000;
    padding: 20px 0;
    transition: linear 0.3s;
    transition-delay: 0.1s;

    ${props => {
        if (props.state === 'entering' || props.state === 'entered') {
            return `animation: ${enter} 0.3s linear;
            max-height: 200px;`;
        }

        if (props.state === 'exiting' || props.state === 'exited') {
            return `animation: ${exit} 0.3s linear;
            max-height: 0;
            opacity: 0;`;
        }

        return '';
    }};
`;

export const SOptionsContainer = styled.div`
    position: absolute;
    right: 0;
    top: -20px;
    display: flex;
    padding: 0 10px;
`;
