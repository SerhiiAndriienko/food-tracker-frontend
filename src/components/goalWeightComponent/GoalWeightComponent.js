import {
  GoalContainer,
  GoalWeightContainer,
  WeightContainer,
} from './GoalWeightComponent.styled';
export default function GoalWeightComponent({ toggleWeightclick }) {
  return (
    <GoalWeightContainer>
      <GoalContainer>
        <img
          height={'28px'}
          src="https://andriizlt.github.io/healthyHub-frontend/static/media/gainMuscle.747f9465f2b3869b77db.png"
          alt="goalImg"
        />
        <div>
          <span>Goal </span>
          <span>Lose fat</span>
        </div>
        <img
          height={'15px'}
          src="https://andriizlt.github.io/healthyHub-frontend/static/media/arrow_down.f75aff20b463a9b71cc7c577d017d1bb.svg"
          alt="openMenu"
        />
      </GoalContainer>
      <WeightContainer onClick={toggleWeightclick}>
        <img
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
