import styled from 'styled-components';
import { ThemeType } from '../../types/styled-component';
interface HeaderMenuProps {
    toggleMenu: boolean
}
export const Header = styled.header`
    width:100%;
    display:flex;
    padding:1rem 0;
  `;


export const HeaderLogo = styled.div`
    width: 50%;
    display: flex;
    justify-content: start;
    align-items: center;
    color:${(props: ThemeType) => props.theme.textColor};
    transition:all .3s;
     @media screen and  (max-width:920px){
        width:100%;
     }
`;

export const HeaderMenu = styled.div <HeaderMenuProps>`
    display: flex;
    width: 50%;
    justify-content: end;
    align-items: center;
    transition:all .3s;
    .close-btn{
        display:none;
    }
    @media screen and (max-width:920px){
        position:absolute;
        top:0;
        right: 0;
        visibility: ${(props: ThemeType) => props.toggleMenu ? "visible" : "hidden"};
        opacity: ${(props: ThemeType) => props.toggleMenu ? "1" : "0"};
        filter:blur(${(props: ThemeType) => props.toggleMenu ? 0 : "20px"});
        width:100%;
        height:100%;
        background:  ${(props: ThemeType) => props.theme.bodyColor};
        z-index:9999;
        display:flex;
        justify-content:center;
        flex-direction:column;
        
        .close-btn{
            display:block;
            position: absolute;
            top:2em;
            right:2em;
            &:hover{
                cursor:pointer;
            }
        }
    }
    `;

export const HeaderMenuList = styled.ul`
    display:flex;
    list-style: none;
    margin:0;
    padding:0;
    li{
        padding: 8px 20px;
        transition: all .35s;
        position: relative;
        display: inline-block;
        width: auto; 
        background-color: transparent;
        border: none;
        cursor: pointer;
        min-width: 100px;
        color: ${(props: ThemeType) => props.theme.textColor};
        & span {         
            position: relative;
            display: inline-block;
            font-size: 12px;
            letter-spacing: 2px;
            font-weight: bold;
            text-transform: capitalize;
            top: 0; left: 0;
            width: 100%;
            padding: 3px 10px;
        }
        &:hover{
            color:${(props: ThemeType) => props.theme.textHoverColor};
        }
        &::before{
            position: absolute;
            content:"";
            top: 0;
            bottom: 0;
            left: 0;
            height: 100%;
            width: 0;
            background: ${(props: ThemeType) => props.theme.bgColor};
            outline: 0!important;
            transition: 0.3s ease-out;
        }
        &:hover::before{
           width: 100%;
        }
    }
    @media screen and  (max-width:920px){
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        gap:1em;
        li{
            span{
                font-size:25px;
            }

        }
    }
 `;
export const MobileMenuButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    color:  ${(props: ThemeType) => props.theme.textColor};
    border-radius: 100px;
    transition: all .3s;
    padding: 7px 5px 5px 5px ;
    @media screen and (min-width:920px){
        display: none;
    }
    &:hover{
        cursor: pointer;
        background-color: ${(props: ThemeType) => props.theme.mainBg};
  }
`;