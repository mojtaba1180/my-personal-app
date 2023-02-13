import styled, { createGlobalStyle, keyframes } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
  transition: all .3s;
  background-color: ${(props) => props.theme.bodyColor};
  color: ${(props) => props.theme.textColor}
}
`;


export const App = styled.div`
width: 100vw;
height:100vh;
padding:0 4rem;
`;

export const Main = styled.main`
    transition: all .3s;
    border-radius: 10px;
    width:100%;
    height:86%;
    display: flex;
    background-color: ${(props) => props.theme.mainBg};
    overflow: hidden;
    position: relative;
    @media screen and (max-width:920px) {
      flex-direction: column;
    }
  `;

export const ImageProfile = styled.div`
    width:40%;
    overflow: hidden;
    @media screen and (max-width:920px) {
    width:15rem;
    height: 15rem;
    margin: 0 auto;
    margin-top: 1em;
    border-radius: 20rem;
    transition: all .5s;
    }
    .glitch{
      width: 100%;
      height: 100%;
    }
`;

export const Content = styled.div`
    width:60%;
    padding: 1rem;
    overflow: hidden;
    transition: .3s;
    @media screen and (max-width:920px) {
      width: 100%;
    }
    `;

interface PropsMath {
  min: number,
  max: number
}
// const randomNumber = ({ min, max }: PropsMath) => {
//   return Math.floor(Math.random() * (max - min + 1))
// }

export const GradientBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all .5s;
  z-index: -1;
  filter:blur(330px);
`;

const timer = "10s";

const shapeOne = keyframes`
0%{
right: 0;
top: 0;
}
25%{
top: 20%; 
}
50%{
  height: 20%;
  width: 10%;
 right: 50%;

}
25%{
 right: 10%;
top: 90%; 
  width: 10%;

}
100%{
right: 0%;
top: 0%;
}

`
export const Shape = styled.div`
  position: absolute;
  width:30%;
  height:20%;
  right: 0;
  border-radius: 50px;
  &.red{
    animation: ${shapeOne} ${timer} infinite ;
    background-color: #000;
  }
  &.blue{
    background-color: #c0cb86;
    transition: 6s;
    animation: ${shapeOne} ${timer} infinite 1s  ;

  }
  &.green{
    background-color: ${(props) => props.theme.textColor};
    transition: 6s;
    animation: ${shapeOne} ${timer} infinite 2s  ;


  }
`;