import styled, { keyframes } from '@app/config/styled';
import { Theme } from '@app/config/styled/models';

interface Props {
    show?: boolean;
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
    padding: 10px;
    display: flex;
    align-self: center;
    align-items: center;
    justify-self: flex-end;
`;

export const SInput = styled.input<Props>`
    position: relative;
    width: ${props => props.show ? '190px' : 0};
    background-color: transparent;
    padding: ${props => props.show ? '10px' : '10px 0'};
    border: none;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    transition: linear 0.3s;
    border-bottom: 1px solid #fff;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        background-color: #fff;
    }

    &:focus {
        outline: none;
    }

    ::placeholder {
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme!!.secondaryTextColor};
    }
`;

export const SIconContainer = styled.div`
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
    }

    &:active {
        animation: ${clickAnimation} 0.3s linear;
    }
`;