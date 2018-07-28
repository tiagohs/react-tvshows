import styled from '@app/config/styled';

interface Props {
    size?: string;
    loading?: boolean;
    circular?: boolean;
}

interface ContainerProps {
    height?: string;
}

export const SContainer = styled.div<ContainerProps>`
    height: ${props => props.height || '100%'};
`;

export const SImage = styled.img<Props>`
    object-fit: ${props => props.size || 'cover'};
    display: ${props => props.loading ? 'none' : 'block'};
    transition: all 0.5s;
    border-radius: ${props => props.circular ? '50%' : '0'};
`;

export const SPlaceholder = styled.img<Props>`
    object-fit: ${props => props.size || 'cover'};
    border-radius: ${props => props.circular ? '50%' : '0'};
`;