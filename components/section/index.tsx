import { SectionContainer, SectionTitle } from "./section.style";

interface Prop{
    children:any,
    title?:String
}
function Section({children,title}:Prop){
    return (
        <SectionContainer>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionContainer>
    )
}

export default Section;