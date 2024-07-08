import React from 'react';
import { useSelector } from 'react-redux';
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
  const { goal } = useSelector(state => state.user);
  let needs = {
    calories: 0,
    water: 0,
  };

  switch (goal) {
    case 'Lose fat':
      needs.calories = 1500;
      needs.water = 2500;
      break;
    case 'Gain muscle':
      needs.calories = 3000;
      needs.water = 3000;
      break;
    case 'Maintain':
      needs.calories = 2000;
      needs.water = 2000;
      break;
    default:
      needs.calories = 2000;
      needs.water = 2500;
  }

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
            <Numbers>{needs.calories}</Numbers>
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
              {needs.water} <span> ml</span>
            </Numbers>
          </div>
        </WaterContainer>
      </WaterAndCaloriesContainer>
    </DailyGoalContainer>
  );
}
