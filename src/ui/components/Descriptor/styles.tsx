import styled, { keyframes, css } from '@app/config/styled';

interface Props {
    state?: string;
    duration?: number;
}

const bottomToTop = keyframes`
  from {
    transform: translateY(8px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SDescriptorContainer = styled.div`
    padding: 10px;
`;

const SBaseAnimatedComponent = css<Props>`
    ${(props: Props) => {
        if (props.state === 'entered') {
            return `animation: ${bottomToTop} ${props.duration ? props.duration / 1000 : (500 / 1000)}s linear;
            transform: translateY(0);
            opacity: 1;`;
        }

        return `
            transition: all ${props.duration ? props.duration / 1000 : (500 / 1000)}s;
            opacity: 0;`;
    }};
`;

export const SItemName = styled.h2<Props>`
    font-size: 35px;
    line-height: 30px;
    color: ${props => props.theme.primaryTextColor};

    ${SBaseAnimatedComponent}
`;

export const SItemOverview = styled.p<Props>`
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0;

    ${SBaseAnimatedComponent}
`;

export const STagsContainer = styled.div<Props>`
    ${SBaseAnimatedComponent}
`;

export const SButtonsContainer = styled.div<Props>`
    ${SBaseAnimatedComponent}
`;