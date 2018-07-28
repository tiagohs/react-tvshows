import styled, { keyframes, css } from '@app/config/styled';

interface Props {
    size?: number;
    color?: string;
    width?: string;
    height?: string;
    clickable?: boolean;
}

const clickAnimation = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.8);
  }
`;

const clickableCss = css`
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
    }

    &:active {
        animation: ${clickAnimation} 0.3s linear;
    }
`;

export const SIcon = styled.i<Props>`
    font-size: ${props => props.size || 14}px;
    color: ${props => props.color || props.theme.primaryColor};
    
    ${props => props.clickable && clickableCss}
`;

export const SLocalIcon = styled.div<Props>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    color: ${props => props.color || props.theme.primaryColor};

    ${props => props.clickable && clickableCss}
`;
