import { Link } from 'react-router-dom';
import { Container, DiaryHeader } from './Diary.styled';
import { DairyNutrientComponent } from './NutrientStatistics';

export default function Diary() {
  const DairyBreakfastComponent = DairyNutrientComponent(
    'Breakfast',
    60,
    40,
    20
  );
  const DairyLunchComponent = DairyNutrientComponent('Lunch', null, 40, 20);
  const DairyDinnerComponent = DairyNutrientComponent('Dinner', null, 40, 20);
  const DairySnackComponent = DairyNutrientComponent('Snack', null, 40, 20);
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
