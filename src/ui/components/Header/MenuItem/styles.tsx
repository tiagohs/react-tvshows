import styled, { keyframes } from '@app/config/styled';

const clickAnimation = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.8);
  }
`;

export const SContent = styled.div`
    display: flex;
    cursor: pointer;
    padding: 15px 20px;

    &:hover {
        .fa {
            transition: all 0.3s;
            color: ${props => props.theme.primaryLightColor}
        }

        span {
            color: ${props => props.theme.primaryLightColor};
        }
    }
    
    &:active {
        animation: ${clickAnimation} 0.3s linear;
    }
`;

export const STitle = styled.span`
    font-family: 'Montserrat', sans-serif; 
    font-size: 12px;
    transition: all 0.3s;
    color: ${props => props.theme.secondaryTextColor};
    margin-left: 10px; 
`;
