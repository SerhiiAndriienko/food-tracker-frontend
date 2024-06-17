import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {
  AddBtn,
  ButtonsDiv,
  CancelBtn,
  Container,
  HowMuch,
  WaterInput,
} from './ModalAddWater.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getIsMainModalOpen } from '../../redux/redux/modalWindow/selectors';
// import { setWaterLevel } from '../../redux/redux/water/slice';
import {
  setIsMainModalOpen,
  setIsWaterModalOpen,
} from '../../redux/redux/modalWindow/slice';
import { useState } from 'react';
import { fetchWaterInDB } from '../../redux/redux/water/operation';
import { fetchDayInDB } from '../../redux/redux/daySlice/operation';

export default function ModalAddWater() {
  const dispatch = useDispatch();
  const BASE_URL = 'http://localhost:8081/api';
  const waterId = useSelector(state => state.waterInDB.water.id);
  const waterLevel = useSelector(state => state.waterInDB.water.value);
  const [waterIntake, setWaterIntake] = useState('');
  const [isValid, setIsValid] = useState(true);
  const isMainModalOpen = useSelector(getIsMainModalOpen);
  const id = useSelector(state => state.day.id);
  const waterHandler = event => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setWaterIntake(value);

      const intValue = parseInt(value, 10);
      if (intValue >= 1 && intValue <= 5000) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
    // if (!value || isNaN(value)) {
    //   setIsValid(false);
    // } else {
    //   setIsValid(true);
    // }
  };

  const isWaterModalOpen = useSelector(
    state => state.isModalOpen.isWaterModalOpen
  );

  const addWater = async () => {
    if (!isValid) {
      toast.error('Please enter a valid water intake amount (max 5000ml).');
    } else {
      dispatch(setIsMainModalOpen(!isMainModalOpen));
      dispatch(setIsWaterModalOpen(!isWaterModalOpen));
      try {
        await axios.put(`${BASE_URL}/days/updateWater/${id}`, {
          value: waterIntake,
        });
        dispatch(fetchDayInDB(id));
        return;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const cancelBtn = () => {
    dispatch(setIsMainModalOpen(!isMainModalOpen));
    dispatch(setIsWaterModalOpen(!isWaterModalOpen));
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
          <CancelBtn onClick={cancelBtn}>Cancel</CancelBtn>
        </ButtonsDiv>
      </div>
    </Container>
  );
}
