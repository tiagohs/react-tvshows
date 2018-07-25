import styled from '@app/config/styled';

interface Props {
    size?: string;
    loading?: boolean;
}

export const SContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const SImage = styled.img<Props>`
    object-fit: ${props => props.size || 'cover'};
    display: ${props => props.loading ? 'none' : 'block'};
    transition: all 0.5s;
`;

export const SPlaceholder = styled.img<Props>`
    object-fit: ${props => props.size || 'cover'};
`;