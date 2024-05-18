import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AddBtn,
  ButtonsDiv,
  CancelBtn,
  Container,
  HowMuch,
  WaterInput,
} from './ModalAddWater.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getIsModalOpen } from '../../redux/redux/modalWindow/selectors';
import {
  setIsWaterModalOpen,
  setWaterLevel,
} from '../../redux/redux/water/slice';
import { setIsModalOpen } from '../../redux/redux/modalWindow/slice';
import { useState } from 'react';

export default function ModalAddWater() {
  const dispatch = useDispatch();
  const [waterIntake, setWaterIntake] = useState('');
  const [isValid, setIsValid] = useState(true);
  const isModalOpen = useSelector(getIsModalOpen);
  const waterHandler = event => {
    const value = event.target.value;
    setWaterIntake(value);
    if (!value || isNaN(value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const isAddWaterModalOpen = useSelector(
    state => state.waterLevel.isModalOpen
  );

  const addWater = () => {
    if (!waterIntake || isNaN(waterIntake)) {
      toast.error('Please enter a valid water intake amount.');
    } else {
      dispatch(setIsModalOpen(!isModalOpen));
      dispatch(setIsWaterModalOpen(!isAddWaterModalOpen));

      dispatch(setWaterLevel(waterIntake));
    }
  };

  return (
    <Container>
      <h3>Add water intake</h3>
      <div>
        <HowMuch>How much water</HowMuch>
        <WaterInput
          value={waterIntake}
          onInput={waterHandler}
          isValid={isValid}
          placeholder="Enter milliliters"
          onKeyDown={event => {
            if (event.key === 'Enter') {
              addWater();
            }
          }}
        ></WaterInput>
        <ButtonsDiv>
          <AddBtn onClick={addWater}>Confirm</AddBtn>
          <CancelBtn>Cancel</CancelBtn>
        </ButtonsDiv>
      </div>
    </Container>
  );
}
