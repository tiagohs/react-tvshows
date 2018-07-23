import styled, { css } from '@app/config/styled';
import { Theme } from '@app/config/styled/models';

interface Props {
    backgroundColor?: string;
    outline?: boolean;
    theme?: Theme;
}

const DefaultStyle = css`
    background-color: ${(props: Props) => 
        props.backgroundColor ? props.backgroundColor : props.theme!!.primaryColor};
    color: #fff;
`;

const OutlineStyle = css`
    background-color: transparent;
    color: ${(props: Props) => props.theme!!.secondaryTextColor};
    border: 2px solid ${(props: Props) => props.theme!!.secondaryTextColor};
    font-weight: 700;
`;

export const STagContainer = styled.span`
    padding: 8px;
    font-size: 14px;
    border-radius: 5px;
    margin-right: 5px;

    ${(props: Props) => props.outline ? OutlineStyle : DefaultStyle}
`;