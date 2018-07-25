import styled, { css } from '@app/config/styled';

interface Props {
    disable?: boolean;
}

const disable = css`
    cursor: initial;
    opacity: 0.4;
`;

const enable = css`
    cursor: pointer;
`;

export const SContainer = styled.div<Props>`
    padding: 30px 20px;

    ${props => props.disable ? disable : enable}
`;