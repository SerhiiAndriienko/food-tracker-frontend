import React, { useEffect, useState } from 'react';
import DailyGoal from '../../components/dailyGoal/DailyGoal';
import FoodGraf from 'components/foodGraf/FoodGraf';
import Diary from 'components/diary/Diary';
import RecommendedFood from 'components/recommendedFood/RecommendedFood';
import { Container, DesktopStyle } from './Home.styled';
import AddWater from 'components/addWater/AddWater';
import useMediaQuery from 'helpers/mediaQuery';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { setWaterLevel } from '../../redux/redux/water/slice';
// import { getWaterLevelFromDB } from '../../redux/redux/water/selectors';
import { fetchWaterInDB } from '../../redux/redux/water/operation';
export default function Home() {
  const dispatch = useDispatch();

  // const { waterInDB, isLoading, error } = useSelector(getWaterLevelFromDB);
  useEffect(() => {
    dispatch(fetchWaterInDB());
  }, [dispatch]);
  // const waterLevel = useSelector(state => state.waterLevel.waterLevel);
  const isMobile = useMediaQuery('(max-width:833px)');
  const [count, setCount] = useState(isMobile ? 2 : 4);
  // const url = 'http://localhost:8081/api/water/';
  // useEffect(() => {
  //   async function fetchData() {
  //     // setIsLoading(true);
  //     await axios
  //       .get(url)
  //       .then(response => {
  //         const waterToday = response.data;
  //         if (waterToday[0]) {
  //           const totalWaterToday = waterToday.reduce((acc, water) => {
  //             return acc + water.value;
  //           }, 0);
  //           dispatch(setWaterLevel(totalWaterToday));
  //         }
  //       })

  //       .catch(error => {
  //         console.log(error);

  //         // error.preventDefault();
  //         // setIsLoading(false);
  //       });
  //   }
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
