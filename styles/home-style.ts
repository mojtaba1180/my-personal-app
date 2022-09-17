import styled, { keyframes } from "styled-components";
import { bgColor, textColor } from './variables';

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
    align-items:start;
    padding-left: 10px;
  `;

export const Title = styled.p<Props>`
    display:flex;
    font-size: ${props => props.size ? props.size : '50px'};
    text-transform: uppercase;
    font-weight: 700;
    position: relative;
    color:${textColor};
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
        background: ${bgColor};
        bottom: 0;
    }
     & span{
        opacity: 0;
        position: relative;
        top:40px;
        animation: ${titleAnimation} ease .4s forwards .3s;
     }
  `;
export const Creative = styled.p`

`