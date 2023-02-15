
import { Circle } from 'rc-progress';
import { ProgressCardContainer,ProgressCardProgressBar,ProgressCardContentContainer,ProgressCardTitle } from './progress-card.style';
function ProgressCard() {

return (
    <ProgressCardContainer>
      <ProgressCardProgressBar>
        <Circle 
          className="bar"
          percent={50}
         strokeWidth={4}
         strokeColor="#D3D3D3" />  
        </ProgressCardProgressBar >
      <ProgressCardContentContainer>
        <ProgressCardTitle> JavaScript </ProgressCardTitle>
      </ProgressCardContentContainer>
    </ProgressCardContainer>
)


}

export default ProgressCard;