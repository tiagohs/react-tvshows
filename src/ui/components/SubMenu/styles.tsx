
import { Theme } from '@app/config/styled/models';
import styled, { keyframes, css } from '@app/config/styled';

interface NotificationProps {
    show?: boolean;
    theme?: Theme;
}

const bottomToTop = keyframes`
    from {
    transform: translateY(8px);
    }

    to {
    transform: translateY(0);
    }
`;

const showNotification = css`
    animation: ${bottomToTop} 0.3s linear;
    transform: translateY(0);
    opacity: 1;
`;

export const SNotificationMessagesContainer = styled.div<NotificationProps>`
    position: absolute;
    bottom: -75px;
    right: 5px;
    width: 150px;
    background: #000;
    z-index: 100;
    border-radius: 5px;
    padding: 10px;
    opacity: ${props => props.show ? 1 : 0};
    transition: opacity 0.3s;

    &:before {
        content: '';
        position: absolute;
        top: -22px;
        right: 9px;
        border-color: transparent transparent rgba(0,0,0);
        border-width: 12px;
        border-style: solid;
    }

    ${props => props.show && showNotification}
`;
