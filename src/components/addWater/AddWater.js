import deleteImg from '../../public/img/trash-03.svg';

import {
  AddBtn,
  AddWaterContainer,
  CanvasContainer,
  Container,
  DeleteBtn,
  Left,
  Ml,
  WaterConsumption,
  WaterPercent,
  WaterText,
} from './AddWater.styled';
import { WaterChart } from './test';

export default function AddWater() {
  let waterIntake = 70;
  return (
    <Container>
      <h3>Water</h3>

      <AddWaterContainer>
        <CanvasContainer style={{ height: '192px' }}>
          <WaterChart waterIntake={waterIntake}></WaterChart>
          <WaterPercent waterIntake={waterIntake}>{waterIntake}%</WaterPercent>
          <DeleteBtn src={deleteImg} alt="deleteImg" height={'20px'} />
        </CanvasContainer>

        <WaterText>
          <p>Water consumption</p>
          <WaterConsumption>1050</WaterConsumption>
          <Ml>ml</Ml>
          <Left>
            <Ml>left:</Ml>
            <Ml>450</Ml>
            <Ml>ml</Ml>
          </Left>
          <AddBtn>+ Add water intake</AddBtn>
        </WaterText>
      </AddWaterContainer>
    </Container>
  );
}
