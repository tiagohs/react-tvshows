import styled, { css } from '@app/config/styled';
import { Theme } from '@app/config/styled/models';

interface Props {
    color?: string;
    theme?: Theme;
}

const Primary = css`
    background: ${(props: Props) => props.theme!!.buttonPrimaryBackgroundColor};
    color: ${(props: Props) => props.theme!!.buttonPrimaryTextColor};

    &:hover, &:active, &:focus {
        opacity: 0.8;
    }
`;

const Secondary = css`
    background: ${(props: Props) => props.theme!!.buttonSecondaryBackgroundColor};
    color: ${(props: Props) => props.theme!!.buttonSecondaryTextColor};

    &:hover, &:active, &:focus {
        opacity: 0.8;
    }
`;

const Outline = css`
    background: transparent;
    color: ${(props: Props) => props.theme!!.secondaryTextColor};
    border: 1px solid ${(props: Props) => props.theme!!.secondaryTextColor};

    &:hover, &:active, &:focus {
        background: ${(props: Props) => props.theme!!.buttonPrimaryBackgroundColor};
        color: ${(props: Props) => props.theme!!.buttonPrimaryTextColor};
    }
`;

const colors = {
    'primary': Primary,
    'secondary': Secondary,
    'outline': Outline
};

export const SButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    cursor: pointer;
    padding: 15px;
    border-radius: 5px;
    border: none;
    
    ${(props: Props) => colors[props.color || 'primary']}

    &:hover, &:active, &:focus {
        outline: none;
    }

    &:hover, &:focus {
        transition: ease-in-out 0.3s;
        outline: none;
    }

    &:active {
        transform: scale(0.96);
    }
`;