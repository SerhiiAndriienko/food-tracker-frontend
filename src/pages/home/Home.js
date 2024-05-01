import React from 'react';
import DailyGoal from '../../components/dailyGoal/DailyGoal';
import FoodGraf from 'components/foodGraf/FoodGraf';
import Diary from 'components/diary/Diary';
import RecommendedFood from 'components/recommendedFood/RecommendedFood';

export default function Home() {
  return (
    <main>
      <DailyGoal></DailyGoal>
      <FoodGraf></FoodGraf>
      <Diary></Diary>
      {/* <RecommendedFood></RecommendedFood> */}
    </main>
  );
}
