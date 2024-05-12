import { useMediaQuery } from '@mui/material';
import maintainImg from '../../public/img/Maintain.png';
import LoseFatImg from '../../public/img/Lose_fat.png';
import gainMuscleImg from '../../public/img/Gain_muscle.png';
import PropTypes from 'prop-types';

import {
  CancelBtn,
  CloseBtn,
  ConfirmBtn,
  Container,
  GoalContainer,
  GoalImg,
} from './ChangeGoal.styled';

export default function ChangeGoal({
  toggleGoalClick,
  toggleIsModalWindowOpen,
}) {
  const isMobile = useMediaQuery('(max-width:834px)');

  return (
    <div>
      <Container>
        <h2>Target selection</h2>
        <p>The service will adjust your calorie intake to your goal</p>
        <GoalContainer>
          <div>
            <GoalImg height={'28px'} src={LoseFatImg} alt="goalImg" />
            <span>Lose fat</span>
          </div>
          <div>
            <GoalImg height={'28px'} src={maintainImg} alt="goalImg" />
            <span>Maintain</span>
          </div>
          <div>
            <GoalImg height={'28px'} src={gainMuscleImg} alt="goalImg" />
            <span>Gain muscle</span>
          </div>
        </GoalContainer>
        <div>
          <ConfirmBtn>Confirm</ConfirmBtn>
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
  toggleGoalClick: PropTypes.func,
  toggleIsModalWindowOpen: PropTypes.func,
};
