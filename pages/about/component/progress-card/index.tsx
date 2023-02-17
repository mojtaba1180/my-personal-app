
import { Line } from 'rc-progress';
import { useTheme } from 'styled-components';
import { ProgressCardContainer, ProgressCardContentContainer, ProgressCardProgressBar, ProgressCardTitle } from './progress-card.style';

interface Prop {
  title:String,
  progressNumber:number
}

function ProgressCard({title,progressNumber}:Prop) {
const theme = useTheme();
console.log(theme)
return (
    <ProgressCardContainer>
      <ProgressCardProgressBar>
        <Line 
          className="bar"
          percent={progressNumber}
         strokeWidth={4}
         trailWidth={1}
         strokeColor={theme.textColor} 
         />  
        </ProgressCardProgressBar >
      <ProgressCardContentContainer>
        <ProgressCardTitle> {title} </ProgressCardTitle>
      </ProgressCardContentContainer>
    </ProgressCardContainer>
)


}

export default ProgressCard;