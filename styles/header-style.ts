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
    color:${props => props.theme.textColor}
`;

export const HeaderMenu = styled.div`
    display: flex;
    width: 50%;
    justify-content: end;
    align-items: center;

    `;

export const HeaderMenuList = styled.ul`

    display:flex;
    list-style: none;
    margin:0;
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

    `;