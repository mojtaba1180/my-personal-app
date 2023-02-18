import styled from 'styled-components';


interface Props {
    size?: string;
}

export const ServicesContainer = styled.div`
    width:100%;
    height:100%;
    display: block;
    /* flex-direction: column; */
    padding: 1em;
    overflow-y: auto;
    overflow-x: hidden;
`;


export const ServicesContainerTitle = styled.div<Props>`
    display:flex;
    font-size: ${props => props.size ? props.size : '50px'};
    text-transform: uppercase;
    font-weight: 700;
    position: relative;
    color:${(props) => props.theme.textColor};
    padding-bottom: 20px;
    transition: .3s;
    height: 60px;
    &::before{
        content:'';
        position: absolute;
        width:2px;
        height:100%;
        background: ${props => props.theme.bgColor};
        bottom: 0;
        left: -10px;
    }
     & span{
        opacity: 0;
        position: relative;
        top:40px;
        font-size: 80%;
        @media screen and (max-width:640px){
            font-size: 2rem;
        }
     }
`;

export const ServicesContainerContent = styled.p`
    font-weight: 200;
    font-size : 20px;
    height:700px
`;
