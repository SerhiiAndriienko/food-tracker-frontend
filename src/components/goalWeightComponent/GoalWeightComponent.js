import PropTypes from 'prop-types';
import {
  GoalContainer,
  GoalImg,
  GoalWeightContainer,
  WeightContainer,
} from './GoalWeightComponent.styled';
import maintainImg from '../../public/img/Maintain.png';
import LoseFatImg from '../../public/img/Lose_fat.png';
import gainMuscleImg from '../../public/img/Gain_muscle.png';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getIsMainModalOpen } from '../../redux/redux/modalWindow/selectors';
import { setIsMainModalOpen } from '../../redux/redux/modalWindow/slice';

export default function GoalWeightComponent({
  toggleWeightclick,
  toggleGoalClick,
}) {
  let imgSrc = '';

  const currentWeight = useSelector(state => state.user.weight);
  const isWeightChanged = useSelector(state => state.day.isWeightChange);
  const { goal } = useSelector(state => state.user);
  switch (goal) {
    case 'Lose fat':
      imgSrc = LoseFatImg;
      break;
    case 'Gain muscle':
      imgSrc = gainMuscleImg;
      break;
    default:
      imgSrc = maintainImg;
      break;
  }
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsMainModalOpen);
  const isMobile = useMediaQuery('(max-width:834px)');
  const openChangeWeightComponent = () => {
    if (isMobile && !isWeightChanged) {
      dispatch(setIsMainModalOpen(!isModalOpen));

      toggleWeightclick(true);
    } else if (!isWeightChanged) {
      toggleWeightclick(true);
    }
  };
  const openChangeGoalComponent = () => {
    if (isMobile) {
      dispatch(setIsMainModalOpen(!isModalOpen));

      toggleGoalClick(true);
    } else {
      toggleGoalClick(true);
    }
  };
  return (
    <GoalWeightContainer>
      <GoalContainer onClick={openChangeGoalComponent}>
        <GoalImg height={'28px'} src={imgSrc} alt="goalImg" />
        <div>
          <span>Goal </span>
          <span>{goal}</span>
        </div>
        <img
          height={'15px'}
          src="https://andriizlt.github.io/healthyHub-frontend/static/media/arrow_down.f75aff20b463a9b71cc7c577d017d1bb.svg"
          alt="openMenu"
        />
      </GoalContainer>
      <WeightContainer onClick={openChangeWeightComponent}>
        <GoalImg
          height={'28px'}
          src="https://andriizlt.github.io/healthyHub-frontend/static/media/Weight.3b2a28209eca1dbfb33a.png"
          alt="goalImg"
        />
        <div>
          <span>Weight </span>
          <span>{currentWeight} kg</span>
        </div>
        {!isWeightChanged && (
          <img
            height={'15px'}
            src="https://andriizlt.github.io/healthyHub-frontend/static/media/edit.dbdab56a20b44e845cfbb0e2c834d2bd.svg"
            alt="writeWeightImg"
          />
        )}
      </WeightContainer>
    </GoalWeightContainer>
  );
}
GoalWeightComponent.propTypes = {
  toggleWeightclick: PropTypes.func.isRequired,
  toggleGoalClick: PropTypes.func.isRequired,
};
