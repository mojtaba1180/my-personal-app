import styled from 'styled-components';

export const ProgressCardContainer = styled.div`
    max-width: 220px;
    width:45%;
    max-height: 100px;
    height: 100%;
    display: flex;
    justify-content:space-between;
    flex-direction: column-reverse;
    align-items:start;
    border:1px solid #ccc4;
    border-radius: 10px;
    padding: 1em;
    overflow: hidden;
    @media screen and (max-width:700px) {
        min-width: 200px;
    }
     @media screen and (max-width:512px) {
        min-width: 45%;
    }
`;

export const ProgressCardContentContainer = styled.div`
    width:100%;
    height:100%;
    padding-bottom:1em ;
`;

export const ProgressCardTitle = styled.div`
    padding: 0;
    margin: 0;
`;
export const ProgressCardContent = styled.div`

`;
export const ProgressCardProgressBar = styled.div`
    width:fit-content;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    .bar{
        width:80px;
        
    }
`;