import styled from "styled-components";
import { ThemeType } from '../../types/styled-component';
export const SectionContainer = styled.div`
    margin: 0;
    padding:0;
    width: 100%;
    height: 100%;

`;
export const SectionTitle = styled.div`
    font-size: 20px;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left: 100%;
        top: 0;
        background: ${(p: ThemeType) => p.theme.textColor};
        width: 1px;
        height: 100%;
    }
     &::after{
        content: "";
        position: absolute;
        left: 96%;
        top: 49%;
        transform: translateY(-50%);
        background: ${(p: ThemeType) => p.theme.textColor};
        width: 60px;
        height: 1px;
    }
`;