import React from 'react';
import {
  Calories,
  CaloriesContainer,
  DailyGoalContainer,
  DailyGoalText,
  Numbers,
  WaterAndCaloriesContainer,
  WaterContainer,
} from './DailyGoal.styled';
export default function DailyGoal() {
  return (
    <DailyGoalContainer>
      <DailyGoalText>Daily Goal</DailyGoalText>

      <WaterAndCaloriesContainer>
        <CaloriesContainer>
          <img
            alt="bubbles"
            src="https://andriizlt.github.io/healthyHub-frontend/static/media/bubble.3b2e6986df7fcf539bc5e73bed7ca1ce.svg"
          />
          <div>
            <Calories>Calories</Calories>
            <Numbers>1000</Numbers>
          </div>
        </CaloriesContainer>
        <WaterContainer>
          <img
            src="https://andriizlt.github.io/healthyHub-frontend/static/media/milk.a0eacd57b86b0ba2f6c6a392b77da7f8.svg"
            alt="water Bottle"
          />
          <div>
            <Calories>Water</Calories>
            <Numbers>
              500 <span> ml</span>
            </Numbers>
          </div>
        </WaterContainer>
      </WaterAndCaloriesContainer>
    </DailyGoalContainer>
  );
}
