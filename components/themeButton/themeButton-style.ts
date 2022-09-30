import styled, { keyframes } from "styled-components";

const lightAnimation = keyframes`
    0%{transform: rotate(-30deg);}
    100%{transform:rotate(0); opacity:1;}

`;
const darkAnimation = keyframes`
    0%{transform: rotate(-30deg);}
    100%{transform:rotate(0); opacity:1;}

`;


const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color:  ${(props) => props.theme.textColor};
  border-radius: 100px;
  padding: 8px;
  transition: all .3s;
  &:hover{
    cursor: pointer;
    background-color: ${(props) => props.theme.mainBg};
  }
  & .light{
    animation: ${lightAnimation} .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) ;
  }
  & .dark{
    animation: ${darkAnimation} .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)  ;
  }
  `;

export { Button };

