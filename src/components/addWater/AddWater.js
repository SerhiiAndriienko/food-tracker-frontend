import deleteImg from '../../public/img/trash-03.svg';
import axios from 'axios';
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
import { WaterChart } from './WaterChart';
import { useSelector, useDispatch } from 'react-redux';
import { getIsMainModalOpen } from '../../redux/redux/modalWindow/selectors';
import {
  setIsMainModalOpen,
  setIsWaterModalOpen,
} from '../../redux/redux/modalWindow/slice';
import { fetchWaterInDB } from '../../redux/redux/water/operation';

export default function AddWater() {
  const BASE_URL = 'http://localhost:8081/api';
  const dispatch = useDispatch();
  const isMainModalOpen = useSelector(getIsMainModalOpen);
  const waterLevel = useSelector(state => state.waterInDB.water.value);
  const waterId = useSelector(state => state.waterInDB.water.id);
  const isAddWaterModalOpen = useSelector(
    state => state.isModalOpen.isWaterModalOpen
  );

  const needWater = 1500;
  const safeWaterLevel = isNaN(waterLevel) ? 0 : waterLevel;

  let waterIntake = Math.round((safeWaterLevel * 100) / needWater);
  if (waterIntake > 100) {
    waterIntake = 100;
  }
  const leftWater = Math.max(needWater - safeWaterLevel, 0);

  const addWater = () => {
    dispatch(setIsMainModalOpen(!isMainModalOpen));
    dispatch(setIsWaterModalOpen(!isAddWaterModalOpen));
  };
  const deleteWater = async () => {
    try {
      await axios.delete(`${BASE_URL}/water/${waterId}`);
      dispatch(fetchWaterInDB());
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <h3>Water</h3>

      <AddWaterContainer>
        <CanvasContainer style={{ height: '192px' }}>
          <WaterChart waterIntake={waterIntake}></WaterChart>
          <WaterPercent waterIntake={waterIntake}>{waterIntake}%</WaterPercent>
          {waterLevel > 0 && (
            <DeleteBtn
              src={deleteImg}
              alt="deleteImg"
              height={'20px'}
              onClick={deleteWater}
            />
          )}
        </CanvasContainer>

        <WaterText>
          <p>Water consumption</p>
          <WaterConsumption>
            {waterLevel < 5001 ? waterLevel : '>5000'}
          </WaterConsumption>
          <Ml>ml</Ml>
          <Left>
            <Ml>left:</Ml>
            <Ml>{leftWater}</Ml>
            <Ml>ml</Ml>
          </Left>
          <AddBtn onClick={addWater}>+ Add water intake</AddBtn>
        </WaterText>
      </AddWaterContainer>
    </Container>
  );
}
