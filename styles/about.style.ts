import styled from 'styled-components';


interface Props {
    size?: string;
}

export const AboutContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    overflow-y: auto;
    overflow-x: hidden;
`;
export const AboutContainerContent = styled.p`
    display: block;
    font-weight: 200;
    font-size : 20px;
    min-height: 400px;
    transition: all .3s;
    margin-bottom: 2em;
`;
export const AboutSkillsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    @media screen and (max-width:920px) {
      grid-template-columns: auto auto;      
    }
    gap:1em;
`;