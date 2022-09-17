import styled from "styled-components";
import { mainBg } from "./variables";


export const App = styled.div`
width: 100vw;
height:100vh;
padding:0 4rem;
`;

export const Main = styled.main`
    width:100%;
    height:86%;
    display: flex;
    background-color: ${mainBg};
  `;

export const ImageProfile = styled.div`
    width:40%;
    overflow: hidden;
`;

export const Content = styled.div`
    width:60%;
    padding: 1rem;
    overflow: hidden;
    `;