
import { Line } from 'rc-progress';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { ProgressCardContainer, ProgressCardContentContainer, ProgressCardProgressBar, ProgressCardTitle } from './progress-card.style';
interface Prop {
  title:String,
  progressNumber:number
}

function ProgressCard({title,progressNumber}:Prop) {
const theme = useTheme();
const [number, setNumber] = useState(0);
useEffect(() => {
  const timer = setTimeout(() => {
    if(number != progressNumber){
      setNumber(number + 1)
    }
  },30)
  return () =>{
    clearTimeout(timer)
  } 
},[number,progressNumber])
return (
    <ProgressCardContainer>
      <ProgressCardProgressBar>
        <Line 
          className="bar"
          percent={number}
         strokeWidth={4}
         trailWidth={1}
         strokeColor={theme.textColor} 
         /> <span> {number}% </span> 
        </ProgressCardProgressBar >Variables
      <ProgressCardContentContainer>
        <ProgressCardTitle> {title} </ProgressCardTitle>
      </ProgressCardContentContainer>
    </ProgressCardContainer>
)


}

export default ProgressCard;