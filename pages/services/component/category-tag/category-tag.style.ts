import styled from "styled-components";

export const CategoryTagContainer = styled.div`
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:10px;
    flex-wrap:wrap ;
    flex: 340px ;
   
`;
export const CategoryTagContainerItem = styled.div`
    width: 170px;
     @media screen  and (max-width:1420px){
        width:330px;   
    }
     @media screen  and (max-width:1352px){
        width:100%;   
    }
    /* border:1px solid ${(props) => props.theme.textColor}; */
    padding: 1em;
    /* border-top: 1px solid ${(props) => props.theme.textColor} ; */
    box-shadow: 10px 10px 0px -5px  ${(props) => props.theme.textColor};
    background-color: ${props => props.theme.bodyColor};
    background-size: 400% 500%;
    transition: all .3s;
    :hover{
        transform: translate(-10px,-10px);
      box-shadow: 12px 12px;
    }
`;
export const CategoryTagIcon = styled.div`

`;
export const CategoryTagTitle = styled.div`

`;