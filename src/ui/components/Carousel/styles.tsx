import styled from '@app/config/styled';

export const SContent = styled.div`
    position: relative;
    overflow-x: scroll;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    
    ::-webkit-scrollbar { 
        display: none; 
    }
`;

export const SItemsContainer = styled.div`
    display: flex;
`;

export const SItem = styled.div`
    padding: 0 10px
`;