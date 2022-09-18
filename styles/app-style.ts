import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
  transition: all .3s;
  background-color: ${(props) => props.theme.bodyColor};
  color: ${(props) => props.theme.textColor}
}

`
export const App = styled.div`
width: 100vw;
height:100vh;
padding:0 4rem;
`;

export const Main = styled.main`

    width:100%;
    height:86%;
    display: flex;
    background-color: ${(props) => props.theme.mainBg};
  `;

export const ImageProfile = styled.div`
    width:40%;
    overflow: hidden;
`;

export const Content = styled.div`
    width:60%;
    padding: 1rem;
    overflow: hidden;
    transition: .3s;
    `;