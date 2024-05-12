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

ChartJS.register(ArcElement);

export default function FoodGraf() {
  const isMobile = useMediaQuery('(max-width:833px)');

  const CarbohydratesComponent = NutrientComponent(
    'Carbohydrates',
    170,
    17,
    10,
    ['#FFC4F7', '#292928'],
    '48px'
  );
  const ProteinComponent = NutrientComponent(
    'Protein',
    127,
    48,
    40,
    ['#FFF3B7', '#292928'],
    '48px'
  );
  const FatComponent = NutrientComponent(
    'Fat',
    56,
    28,
    50,
    ['#B6B6B6', '#292928'],
    '48px'
  );
  const CaloriesComponent = NutrientComponent(
    'Calories',
    1500,
    300,
    null,
    ['#45FFBC', '#292928'],
    '168px'
  );
  return (
    <Container>
      <h3>Food</h3>
      <InsideContainer>
        <CaloriesText>
          <CaloriesNumber>300</CaloriesNumber>
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
