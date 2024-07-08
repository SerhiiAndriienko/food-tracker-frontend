import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import {
  CancelBtn,
  CloseBtn,
  ConfirmBtn,
  Container,
  WeightInput,
} from './ChangeWeight.styled';
import { useState } from 'react';
import Loader from 'components/loader/Loader';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateDay } from '../../redux/redux/daySlice/operation';
import { updateDataOfUser } from '../../redux/redux/userSlice/operation';

export default function ChangeWeight({
  toggleIsModalWindowOpen,
  toggleWeightclick,
}) {
  const dispatch = useDispatch();
  const currentWeight = useSelector(state => state.user.weight);
  const dayId = sessionStorage.getItem('id');
  const userId = sessionStorage.getItem('userId');
  const [newWeight, setNewWeight] = useState(currentWeight);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useMediaQuery('(max-width:833px)');
  const currentDate = new Date();

  const formattedDate = `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;

  const weightHandler = event => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setNewWeight(value);

      const intValue = parseInt(value, 10);
      if (intValue >= 25 && intValue <= 200) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  };
  const setNewWeightInDB = async () => {
    if (!isValid) {
      toast.error('Please enter a valid weight (max 250kg).');
    } else {
      try {
        setIsLoading(true);
        const weightToUpdate = newWeight;
        await dispatch(
          updateDay({
            data: { weight: weightToUpdate, isWeightChange: true },
            id: dayId,
          })
        );
        await dispatch(
          updateDataOfUser({
            data: { weight: weightToUpdate },
            id: userId,
          })
        );
        setIsLoading(false);
        toggleWeightclick(false);
        return;
      } catch (error) {
        setIsLoading(false);

        console.log(error);
      }
    }
  };

  return (
    <Container>
      {isLoading && <Loader></Loader>}

      <h2>Enter your current weight</h2>
      <p>You can record your weight once a day</p>
      <p>
        Today<span> {formattedDate.replaceAll('-', '.')}</span>
      </p>
      <div>
        <WeightInput
          value={newWeight}
          onInput={weightHandler}
          isValid={isValid}
          placeholder="Enter your weight"
          onKeyDown={event => {
            if (event.key === 'Enter') {
              setNewWeightInDB();
            }
          }}
        ></WeightInput>

        <ConfirmBtn onClick={setNewWeightInDB}>Confirm</ConfirmBtn>
      </div>
      {!isMobile ? (
        <CloseBtn
          src="https://andriizlt.github.io/healthyHub-frontend/static/media/close-circle.73bdd9e6ab202aa8197dc65002a783d9.svg"
          alt="close"
          onClick={toggleWeightclick}
        />
      ) : (
        <CancelBtn onClick={toggleIsModalWindowOpen}>Cancel</CancelBtn>
      )}
    </Container>
  );
}
ChangeWeight.propTypes = {
  toggleIsModalWindowOpen: PropTypes.func,
  toggleWeightclick: PropTypes.func,
};
