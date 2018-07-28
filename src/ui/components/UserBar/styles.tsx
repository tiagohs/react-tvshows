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
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 10px;
`;

export const SUserContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
    }

    &:active {
        animation: ${clickAnimation} 0.3s linear;
    }

`;

export const SName = styled.span`
    color: #fff;
    font-size: 14px;
    margin-right: 10px;
`;