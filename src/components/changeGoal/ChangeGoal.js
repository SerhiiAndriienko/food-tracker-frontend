import { useMediaQuery } from '@mui/material';
import maintainImg from '../../public/img/Maintain.png';
import LoseFatImg from '../../public/img/Lose_fat.png';
import gainMuscleImg from '../../public/img/Gain_muscle.png';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  CancelBtn,
  CloseBtn,
  ConfirmBtn,
  Container,
  GoalContainer,
  GoalImg,
  GoalItem,
} from './ChangeGoal.styled';
import { setGoal } from '../../redux/redux/daySlice/asyncSlice';
import { useState } from 'react';
import { setIsMainModalOpen } from '../../redux/redux/modalWindow/slice';
export default function ChangeGoal({
  toggleGoalClick,
  toggleIsModalWindowOpen,
}) {
  const currentGoal = useSelector(state => state.day.goal);
  const [selectedGoal, setSelectedGoal] = useState(currentGoal);
  const isMobile = useMediaQuery('(max-width:834px)');
  const dispatch = useDispatch();

  const changeGoal = () => {
    dispatch(setGoal(selectedGoal));
    dispatch(setIsMainModalOpen(false));
    toggleGoalClick(false);
  };

  return (
    <div>
      <Container>
        <h2>Target selection</h2>
        <p>The service will adjust your calorie intake to your goal</p>
        <GoalContainer>
          <GoalItem selected={selectedGoal === 'Lose fat'}>
            <GoalImg height={'28px'} src={LoseFatImg} alt="goalImg" />
            <button
              onClick={() => {
                setSelectedGoal('Lose fat');
              }}
            >
              Lose fat
            </button>
          </GoalItem>
          <GoalItem selected={selectedGoal === 'Maintain'}>
            <GoalImg height={'28px'} src={maintainImg} alt="goalImg" />
            <button
              onClick={() => {
                setSelectedGoal('Maintain');
              }}
            >
              Maintain
            </button>
          </GoalItem>
          <GoalItem selected={selectedGoal === 'Gain muscle'}>
            <GoalImg height={'28px'} src={gainMuscleImg} alt="goalImg" />
            <button
              onClick={() => {
                setSelectedGoal('Gain muscle');
              }}
            >
              Gain muscle
            </button>
          </GoalItem>
        </GoalContainer>
        <div>
          <ConfirmBtn onClick={changeGoal}>Confirm</ConfirmBtn>
        </div>
        {!isMobile ? (
          <CloseBtn
            src="https://andriizlt.github.io/healthyHub-frontend/static/media/close-circle.73bdd9e6ab202aa8197dc65002a783d9.svg"
            alt="close"
            onClick={toggleGoalClick}
          />
        ) : (
          <CancelBtn onClick={toggleIsModalWindowOpen}>Cancel</CancelBtn>
        )}
      </Container>
    </div>
  );
}
ChangeGoal.propTypes = {
  toggleGoalClick: PropTypes.func.isRequired,
  toggleIsModalWindowOpen: PropTypes.func.isRequired,
};
