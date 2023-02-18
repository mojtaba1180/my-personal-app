import styled from "styled-components";
import { ThemeType } from "../../types/styled-component";

export const CategoryTagContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    @media screen and (max-width:920px) {
      grid-template-columns: auto auto;      
    }
    gap:2em;
    /* flex-wrap:wrap ; */
    /* flex: 340px ; */
    margin-top: 2em;
`;
export const CategoryTagContainerItem = styled.div`
    
    width: 100%;
    height: 10rem;
    /* border:1px solid ${(props) => props.theme.textColor}; */
    padding: 1em;
    /* border-top: 1px solid ${(props) => props.theme.textColor} ; */
    /* box-shadow: 10px 10px 0px -5px  ${(props) => props.theme.textColor}; */
    /* background-color: ${props => props.theme.bodyColor}; */
    border: solid 1px ${(props: ThemeType) => props.theme.borderColor};
    border-radius: 1em;
    background-size: 400% 500%;
    transition: all .3s;
    :hover{
        transform: translate(-10px,-10px);
      /* box-shadow: 12px 12px; */
    }
`;
export const CategoryTagIcon = styled.div`

`;
export const CategoryTagTitle = styled.div`

`;