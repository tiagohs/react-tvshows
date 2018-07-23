import styled from '@app/config/styled';

export const SDescriptorContainer = styled.div`
    padding: 10px;
`;

export const SMainTitle = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 5px;
    padding-bottom: 20px;
    color: ${props => props.theme.primaryTextColor}
`;

export const SItemName = styled.h2`
    font-size: 35px;
    line-height: 30px;
    color: ${props => props.theme.primaryTextColor}
`;

export const SItemOverview = styled.p`
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0;
`;
