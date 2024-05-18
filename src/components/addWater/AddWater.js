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
import { WaterChart } from './WaterChart';
import { useSelector, useDispatch } from 'react-redux';
import { getIsModalOpen } from '../../redux/redux/modalWindow/selectors';
import {
  deleteWaterLevel,
  setIsWaterModalOpen,
} from '../../redux/redux/water/slice';
import { setIsModalOpen } from '../../redux/redux/modalWindow/slice';
export default function AddWater() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsModalOpen);
  const waterLevel = useSelector(state => state.waterLevel.waterLevel);
  const isAddWaterModalOpen = useSelector(
    state => state.waterLevel.isModalOpen
  );

  const needWater = 1500;
  let waterIntake = Math.round((waterLevel * 100) / needWater);
  if (waterIntake > 100) {
    waterIntake = 100;
  }
  const leftWater = Math.max(needWater - waterLevel, 0);

  const addWater = () => {
    dispatch(setIsModalOpen(!isModalOpen));
    dispatch(setIsWaterModalOpen(!isAddWaterModalOpen));
  };
  const deleteWater = () => {
    dispatch(deleteWaterLevel());
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
          <WaterConsumption>{waterLevel}</WaterConsumption>
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
