import styled, { keyframes } from '@app/config/styled';
import Image from '@app/ui/components/Image';

interface Props {
    state?: string;
}

const enterFromRight = keyframes`
  from {
    transform: translateX(20px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const exitToLeft = keyframes`
  from {
    transform: scale(1) translateX(0);
    opacity: 1;
  }

  to {
    transform: scale(0.8) translateX(-30px);
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
  from {
    bottom: 0;
    opacity: 0;
  }

  to {
    bottom: 20px;
    opacity: 1;
  }
`;

export const SContainer = styled.div`
    position: relative;
    width: 300px;
    transition: opacity 0.3s;

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
        if (props.state === 'entering') {
            return `animation: ${enterFromRight} 0.3s linear;
            transform: translateY(0);`;
        }

        if (props.state === 'entered') {
            return 'opacity: 1';
        }

        if (props.state === 'exiting') {
            return `animation: ${exitToLeft} 0.5s linear;
            transform: translateY(0);
            opacity: 0;`;
        }

        if (props.state === 'exited') {
            return 'opacity: 0';
        }
        
        return '';
    }};
`;

export const SPoster = styled(Image)`

`;

export const SFooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    transition: all 0.3s;

    ${(props: Props) => {
        if (props.state === 'entering') {
            return `animation: ${containerBottomToTop} 0.3s linear;`;
        }

        if (props.state === 'exiting') {
            return `opacity: 0;`;
        }

        if (props.state === 'exited') {
            return 'opacity: 0';
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
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    ${(props: Props) => {
        if (props.state === 'entering') {
            return `animation: ${voteBottomToTop} 0.3s linear;`;
        }

        if (props.state === 'exiting') {
            return `opacity: 0;`;
        }

        if (props.state === 'exited') {
            return 'opacity: 0';
        }
        
        return '';
    }};

`;