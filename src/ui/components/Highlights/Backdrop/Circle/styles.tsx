import styled from '@app/config/styled';
import { Theme } from '@app/config/styled/models';

interface CircleProps {
    isActive?: boolean;
    theme?: Theme;
}

export const SCircle = styled.span<CircleProps>`
    width: 10px;
    height: 10px;
    margin: 0 3px;
    border-radius: 50%;
    transition: all 0.3s;
    cursor: pointer;

    background: ${props => props.isActive ? props.theme.primaryColor : props.theme.secondaryTextColor};
`;