import React, { useEffect, useState } from 'react';
import DailyGoal from '../../components/dailyGoal/DailyGoal';
import FoodGraf from 'components/foodGraf/FoodGraf';
import Diary from 'components/diary/Diary';
import RecommendedFood from 'components/recommendedFood/RecommendedFood';
import { Container, DesktopStyle } from './Home.styled';
import AddWater from 'components/addWater/AddWater';
import useMediaQuery from 'helpers/mediaQuery';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {
  createDayInDB,
  fetchDayInDB,
} from '../../redux/redux/daySlice/operation';
export default function Home() {
  const dispatch = useDispatch();
  const id = useSelector(state => state.day.id);

  useEffect(() => {
    if (!id) {
      dispatch(createDayInDB());
      return;
    }
    dispatch(fetchDayInDB(id));
  }, [dispatch, id]);

  const isMobile = useMediaQuery('(max-width:833px)');
  const [count, setCount] = useState(isMobile ? 2 : 4);

  useEffect(() => {
    setCount(isMobile ? 2 : 4);
  }, [isMobile]);
  return (
    <div>
      <Container>
        <p>Today</p>
        <Link>On the way to the goal &rarr;</Link>
      </Container>

      <DesktopStyle>
        <DailyGoal></DailyGoal>
        <AddWater></AddWater>
        <FoodGraf></FoodGraf>
      </DesktopStyle>

      <Diary></Diary>
      <RecommendedFood count={count}></RecommendedFood>
    </div>
  );
}
