import styled, { keyframes } from "styled-components";

interface Props {
    size?: string;
}

const titleAnimation = keyframes`
    0%{transform: translateY(0);}
    100%{transform:translateY(-40px); opacity:1;}

`;
const titleParentAnimation = keyframes`
    0%{ height:0;}
    100%{height:80px;}

`;

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    height:100%;
    width:100%;
    justify-content:center;
    align-items: center;
    padding-left: 0;
  `;

export const Title = styled.p<Props>`
    display:flex;
    font-size: ${props => props.size ? props.size : '50px'};
    text-transform: uppercase;
    font-weight: 700;
    position: relative;
    color:${(props) => props.theme.textColor};
    padding-bottom: 20px;
    transition: .3s;
    overflow:hidden;
    height: 80px;
    animation: ${titleParentAnimation} ease .4s forwards .3s;
    &::before{
        content:'';
        position: absolute;
        width:200px;
        height:3px;
        background: ${props => props.theme.bgColor};
        bottom: 0;
        width: 100%;
    }
     & span{
        opacity: 0;
        position: relative;
        top:40px;
        font-size: 80%;
        animation: ${titleAnimation} ease .4s forwards .3s;
        @media screen and (max-width:640px){
            font-size: 2rem;
        }
     }
  `;
export const Creative = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    div{
        display: flex;
        gap:10px;

        .social{
            cursor:pointer;
            &:hover{
            }
        }
    }
`