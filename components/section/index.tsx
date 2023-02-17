
interface Prop{
    children:any,
    title?:String
}
function Section({children,title}:Prop){
    return (
        <div>
            <div>{title}</div>
            {children}
        </div>
    )
}

export default Section;