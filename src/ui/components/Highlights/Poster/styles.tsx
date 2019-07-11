import styled, { keyframes, css } from '@app/config/styled';

interface Props {
    state?: string;
    width?: string;
    height?: string;
}

const enterFromRight = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const exitToLeft = keyframes`
  0% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  50% {
    transform: scale(0.8) translateX(-50px);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.8) translateX(50px);
    opacity: 0;
  }
`;

const containerBottomToTop = keyframes`
  from {
    padding-bottom: 0;
    opacity: 0;
  }

  to {
    padding-bottom: 20px;
    opacity: 1;
  }
`;

const voteBottomToTop = keyframes`
  0% {
    bottom: 0;
    opacity: 0;
  }
  25% {
    bottom: 20px;
    opacity: 1;
  }
  50% {
    transform: scale(0.88);
    opacity: 1;
  }
  75% {
    transform: scale(1);
    opacity: 1;
  }
  85% {
    transform: scale(0.88);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const playButtonAnimation = keyframes`
  0% {
    transform: scale(0.88);
    opacity: 0;
  }
  50% {
    transform: scale(1.11);
    opacity: 1;
  }
  75% {
    transform: scale(0.88);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const clickAnimation = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.88);
  }
`;

export const SContainer = styled.div<Props>`
    position: relative;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    transition: opacity 0.3s;
    border-radius: 5px;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: -moz-linear-gradient(top, rgba(20,11,11,0) 0%, 
        rgba(0,0,0,1) 80%, rgba(0,0,0,1) 81%);
        background: -webkit-linear-gradient(top, rgba(20,11,11,0) 0%,
        rgba(0,0,0,1) 80%,rgba(0,0,0,1) 81%);
        background: linear-gradient(to bottom, rgba(20,11,11,0) 0%,
        rgba(0,0,0,1) 80%,rgba(0,0,0,1) 81%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00140b0b', 
        endColorstr='#000000',GradientType=0 );
    }

    ${(props: Props) => {
        if (props.state === 'entering' || props.state === 'entered') {
            return css`animation: ${enterFromRight} 0.3s linear;
            transform: translateY(0);`;
        }

        if (props.state === 'exiting') {
            return css`animation: ${exitToLeft} 1s linear;
            transform: translateY(0);
            opacity: 0;`;
        }

        return '';
    }};
`;

export const SFooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    transition: all 0.3s;

    ${(props: Props) => {
        if (props.state === 'entering' || props.state === 'entered') {
            return css`animation: ${containerBottomToTop} 0.3s linear;`;
        }

        if (props.state === 'exiting' || props.state === 'exited') {
            return `opacity: 0;`;
        }

        return '';
    }};
`;

export const SDetails = styled.p`
    margin: 0;
    font-size: 12px;
    line-height: 20px;
`;

export const SVote = styled.span`
    position: absolute;
    right: 20px;
    bottom: 20px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 3px solid #3DB13D;
    font-size: 14px;
    color: #3DB13D;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    ${(props: Props) => {
        if (props.state === 'entering' || props.state === 'entered') {
            return css`animation: ${voteBottomToTop} 1.2s linear;`;
        }

        if (props.state === 'exiting' || props.state === 'exited') {
            return `opacity: 0;`;
        }

        return '';
    }};

`;

export const SPlay = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;

    ${(props: Props) => {
        if (props.state === 'entering' || props.state === 'entered') {
            return css`animation: ${playButtonAnimation} 0.6s linear;`;
        }

        if (props.state === 'exiting' || props.state === 'exited') {
            return `opacity: 0;`;
        }

        return '';
    }};

    &:hover {
        opacity: 0.8;
    }

    &:active {
      animation: ${clickAnimation} 0.3s linear;
    }
`;