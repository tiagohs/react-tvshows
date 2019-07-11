import styled, { keyframes, css } from '@app/config/styled';
import { MEDIUM_DEVICES_BREAKPOINT } from '@app/ui/containers/BaseContainer';

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
            return css`animation: ${bottomToTop} ${props.duration ? props.duration / 1000 : (500 / 1000)}s linear;
            transform: translateY(0);
            opacity: 1;`;
        }

        return `
            transition: all ${props.duration ? props.duration / 1000 : (500 / 1000)}s;
            opacity: 0;`;
    }};
`;

export const SItemName = styled.h2<Props>`
    font-size: 27px;
    line-height: 37px;
    margin: 15px 0;
    color: ${props => props.theme.primaryTextColor};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    ${SBaseAnimatedComponent}

    @media (min-width: ${MEDIUM_DEVICES_BREAKPOINT}px) {
        font-size: 35px;
        line-height: 45px;
        margin: 20px 0;
    }
`;

export const SItemOverview = styled.p<Props>`
    font-size: 14px;
    line-height: 23px;
    padding: 10px 0;
    max-height: 90px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    ${SBaseAnimatedComponent}
`;

export const STagsContainer = styled.div<Props>`
    ${SBaseAnimatedComponent}
`;

export const SButtonsContainer = styled.div<Props>`
    ${SBaseAnimatedComponent}
`;