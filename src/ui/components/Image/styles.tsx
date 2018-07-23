import styled from '@app/config/styled';

interface Props {
    size?: string;
}

export const SContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const SImage = styled.img`
    object-fit: ${(props: Props) => props.size || 'cover'};
`;
