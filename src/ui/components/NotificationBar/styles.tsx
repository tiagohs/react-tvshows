import { Theme } from '@app/config/styled/models';
import styled, { keyframes } from '@app/config/styled';

interface IconProps {
    number?: number;
    theme?: Theme;
}

const clickAnimation = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.8);
  }
`;

export const SContent = styled.div`
    position: relative;
    padding: 10px 20px;
    display: flex;
    align-self: center;
    align-items: center;
    justify-self: flex-end;
`;

export const SIconContainer = styled.div<IconProps>`
    position: relative;
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
    }

    &:active {
        animation: ${clickAnimation} 0.3s linear;
    }

    &:before {
        content: '${props => `${props.number}`}';
        position: absolute;
        top: -8px;
        right: -8px;
        width: 16px;
        height: 16px;
        color: #fff;
        font-size: 9px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.primaryColor};
        display: ${props => props.number && props.number > 0 ? 'flex' : 'none'};
    }
`;