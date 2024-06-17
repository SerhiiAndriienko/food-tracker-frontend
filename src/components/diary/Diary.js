import { Link } from 'react-router-dom';
import { Container, DiaryHeader } from './Diary.styled';
import { DairyNutrientComponent } from './NutrientStatistics';

import { useSelector } from 'react-redux';

export default function Diary() {
  // const dispatch = useDispatch();
  const day = useSelector(state => state.day);
  const breakfastFood = day.breakfast;
  const dinnerFood = day.dinner;
  const lunchFood = day.lunch;
  const snackFood = day.snack;
  // useEffect(() => {
  //   dispatch(fetchDayInDB());
  // }, [dispatch]);
  const calculateNutrients = foodArray => {
    const carbonohidrates = foodArray.reduce(
      (acc, food) => acc + food.carbonohidrates,
      0
    );
    const protein = foodArray.reduce((acc, food) => acc + food.protein, 0);
    const fat = foodArray.reduce((acc, food) => acc + food.fat, 0);

    return { carbonohidrates, protein, fat };
  };

  const DairyBreakfastComponent = DairyNutrientComponent(
    'Breakfast',

    calculateNutrients(breakfastFood)
  );
  const DairyLunchComponent = DairyNutrientComponent(
    'Lunch',
    calculateNutrients(lunchFood)
  );
  const DairyDinnerComponent = DairyNutrientComponent(
    'Dinner',
    calculateNutrients(dinnerFood)
  );
  const DairySnackComponent = DairyNutrientComponent(
    'Snack',
    calculateNutrients(snackFood)
  );
  return (
    <Container>
      <DiaryHeader>
        <h3>Diary</h3>
        <Link>See more</Link>
      </DiaryHeader>
      <DairyBreakfastComponent></DairyBreakfastComponent>
      <DairyLunchComponent></DairyLunchComponent>
      <DairyDinnerComponent></DairyDinnerComponent>
      <DairySnackComponent></DairySnackComponent>
    </Container>
  );
}
