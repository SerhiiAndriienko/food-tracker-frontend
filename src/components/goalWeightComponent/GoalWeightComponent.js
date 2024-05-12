import PropTypes from 'prop-types';
import {
  GoalContainer,
  GoalImg,
  GoalWeightContainer,
  WeightContainer,
} from './GoalWeightComponent.styled';
import { useMediaQuery } from '@mui/material';
export default function GoalWeightComponent({
  toggleWeightclick,
  toggleGoalClick,
  toggleIsModalWindowOpen,
}) {
  const isMobile = useMediaQuery('(max-width:834px)');
  const openChangeWeightComponent = () => {
    if (isMobile) {
      toggleIsModalWindowOpen();
      toggleWeightclick();
    } else {
      toggleWeightclick();
    }
  };
  const openChangeGoalComponent = () => {
    if (isMobile) {
      toggleIsModalWindowOpen();
      toggleGoalClick();
    } else {
      toggleGoalClick();
    }
  };

  return (
    <GoalWeightContainer>
      <GoalContainer onClick={openChangeGoalComponent}>
        <GoalImg
          height={'28px'}
          src="https://andriizlt.github.io/healthyHub-frontend/static/media/gainMuscle.747f9465f2b3869b77db.png"
          alt="goalImg"
        />
        <div>
          <span>Goal </span>
          <span>Gain muscle</span>
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
          <span>Weigth </span>
          <span>100 kg</span>
        </div>
        <img
          height={'15px'}
          src="https://andriizlt.github.io/healthyHub-frontend/static/media/edit.dbdab56a20b44e845cfbb0e2c834d2bd.svg"
          alt="writeWeightImg"
        />
      </WeightContainer>
    </GoalWeightContainer>
  );
}
GoalWeightComponent.propTypes = {
  toggleWeightclick: PropTypes.func.isRequired,
  toggleGoalClick: PropTypes.func.isRequired,
  toggleIsModalWindowOpen: PropTypes.func,
};
