import styled from 'styled-components';
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
    color:${props => props.theme.textColor};
    transition:all .3s;
     @media screen and  (max-width:920px){
        width:100%;
     }
`;

export const HeaderMenu = styled.div`
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
        visibility: ${props => props.toggleMenu ? "visible" : "hidden"};
        opacity: ${props => props.toggleMenu ? "1" : "0"};
        filter:blur(${props => props.toggleMenu ? 0 : "20px"});
        width:100%;
        height:100%;
        background:  ${(props) => props.theme.bodyColor};
        z-index:9999;
        display:flex;
        justify-content:center;
        flex-direction:column;
        
        .close-btn{
            display:block;
            position: absolute;
            top:10px;
            right:10px;
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
        color: ${props => props.theme.textColor};
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
            color:${props => props.theme.textHoverColor};
        }
        &::before{
            position: absolute;
            content:"";
            top: 0;
            bottom: 0;
            left: 0;
            height: 100%;
            width: 0;
            background: ${props => props.theme.bgColor};
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
    color:  ${(props) => props.theme.textColor};
    border-radius: 100px;
    transition: all .3s;
    padding: 7px 5px 5px 5px ;
    &:hover{
        cursor: pointer;
    background-color: ${(props) => props.theme.mainBg};
  }
`;