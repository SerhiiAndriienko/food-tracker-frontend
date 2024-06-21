import { Chart as ChartJS, ArcElement } from 'chart.js';
import {
  Calories,
  CaloriesNumber,
  CaloriesText,
  Container,
  InsideContainer,
  TabletStyle,
} from './FoodGraf.styled';
import { NutrientComponent } from './NutrientComponent';
import useMediaQuery from 'helpers/mediaQuery';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement);

export default function FoodGraf() {
  let needCalories;

  const { goal } = useSelector(state => state.day);
  switch (goal) {
    case 'Lose fat':
      needCalories = 2500;
      break;
    case 'Gain muscle':
      needCalories = 2000;
      break;
    case 'Maintain':
      needCalories = 2000;
      break;
    default:
      needCalories = 2500;
  }

  const day = useSelector(state => state.day);

  const isMobile = useMediaQuery('(max-width:833px)');
  const sumNutrients = meals => {
    return meals.reduce(
      (acc, meal) => {
        acc.carbonohidrates += meal.carbonohidrates;
        acc.protein += meal.protein;
        acc.fat += meal.fat;
        acc.calories += meal.calories;
        return acc;
      },
      { carbonohidrates: 0, protein: 0, fat: 0, calories: 0 }
    );
  };

  const totalNutrients = sumNutrients([
    ...day.breakfast,
    ...day.lunch,
    ...day.dinner,
    ...day.snack,
  ]);
  const CarbohydratesComponent = NutrientComponent(
    'Carbohydrates',
    170,
    totalNutrients.carbonohidrates,
    (170 / totalNutrients.carbonohidrates) * 100,
    ['#FFC4F7', '#292928'],
    '52px'
  );
  const ProteinComponent = NutrientComponent(
    'Protein',
    127,
    totalNutrients.protein,
    (127 / totalNutrients.protein) * 100,
    ['#FFF3B7', '#292928'],
    '52px'
  );
  const FatComponent = NutrientComponent(
    'Fat',
    56,
    totalNutrients.fat ? totalNutrients.fat : 0,
    Math.round((56 / totalNutrients.fat) * 100),
    ['#B6B6B6', '#292928'],
    '52px'
  );
  const CaloriesComponent = NutrientComponent(
    'Calories',
    needCalories,
    totalNutrients.calories,
    1,
    ['#45FFBC', '#292928'],
    '168px'
  );
  return (
    <Container>
      <h3>Food</h3>
      <InsideContainer>
        <CaloriesText>
          <CaloriesNumber> {totalNutrients.calories}</CaloriesNumber>
          <Calories>calories</Calories>
        </CaloriesText>
        <TabletStyle isMobile={isMobile}>
          <div>
            <CaloriesComponent></CaloriesComponent>
          </div>
          <div>
            <div>
              <CarbohydratesComponent></CarbohydratesComponent>
            </div>
            <div>
              <ProteinComponent></ProteinComponent>
            </div>
            <div>
              <FatComponent></FatComponent>
            </div>
          </div>
        </TabletStyle>
      </InsideContainer>
    </Container>
  );
}
