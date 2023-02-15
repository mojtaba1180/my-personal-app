import styled from 'styled-components';

export const ProgressCardContainer = styled.div`
    max-width: 420px;
    width:100%;
    min-height: 100%;
    height: 100%;
    display: flex;
    justify-content:space-between;
    align-items:center;
`;

export const ProgressCardContentContainer = styled.div`
    width:100%;
    height:100%;
    padding:1em;
`;

export const ProgressCardTitle = styled.div`

`;
export const ProgressCardContent = styled.div`

`;
export const ProgressCardProgressBar = styled.div`
    width:fit-content;
    height:100%
    display:flex;
    justify-content:center;
    align-items:center;
    .bar{
        width:80px;
    }
`;