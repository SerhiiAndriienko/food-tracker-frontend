import useMediaQuery from 'helpers/mediaQuery';
import {
  NutrientBlock,
  NutrientInfo,
  NutrientStatistics,
  Nutrients,
  RecordBtn,
} from './Diary.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  setIsFoodModalOpen,
  setIsMainModalOpen,
  setMealsType,
} from '../../redux/redux/modalWindow/slice';
import { getIsMainModalOpen } from '../../redux/redux/modalWindow/selectors';

export const DairyNutrientComponent = (eatingTime, object) => {
  const DairyNutrientComponent = () => {
    console.log(object);
    const carbonohidrates = object.carbonohidrates;
    const protein = object.protein;
    const fat = object.fat;

    const isMobile = useMediaQuery('(max-width:833px)');
    const dispatch = useDispatch();
    const isMainModalOpen = useSelector(getIsMainModalOpen);
    const isFoodModalOpen = useSelector(
      state => state.isModalOpen.foodInfo.isFoodModalOpen
    );
    // const selectors = {
    //   Breakfast: state => state.food.breakfast,
    //   Lunch: state => state.food.lunch,
    //   Dinner: state => state.food.dinner,
    //   Snack: state => state.food.snack,
    // };
    // const foodSelector = selectors[eatingTime];
    // const food = useSelector(foodSelector);
    const toggleFoodModalWindow = () => {
      dispatch(setMealsType(eatingTime));

      dispatch(setIsFoodModalOpen(!isFoodModalOpen));
      dispatch(setIsMainModalOpen(!isMainModalOpen));
    };

    const eatingImg = () => {
      switch (eatingTime) {
        case 'Breakfast':
          return 'https://andriizlt.github.io/healthyHub-frontend/static/media/breakfast.f1ff39ce6a18fb4d909722e48c944518.svg';
        case 'Lunch':
          return 'https://andriizlt.github.io/healthyHub-frontend/static/media/lunch.30f0a0599d84d0a170fe6c53fbe282f5.svg';
        case 'Dinner':
          return 'https://andriizlt.github.io/healthyHub-frontend/static/media/dinner.548e66b9d3a3ed31fbeb5279ee2dd299.svg';
        default:
          return 'https://andriizlt.github.io/healthyHub-frontend/static/media/snack.ab1ecdcc3d6f3609639a77576cf8628d.svg';
      }
    };
    return (
      <NutrientBlock isMobile={isMobile}>
        <NutrientInfo>
          <img alt="BreakfastFoto" src={eatingImg()} height={'36px'} />
          <p>{eatingTime}</p>
        </NutrientInfo>

        {carbonohidrates ? (
          <NutrientStatistics>
            <Nutrients>
              <div>
                <div>
                  Carbonohidrates:<span> {carbonohidrates}</span>
                </div>
                <div>
                  Protein:<span> {protein}</span>
                </div>
              </div>
              <div>
                Fat: <span>{fat}</span>
              </div>
            </Nutrients>
          </NutrientStatistics>
        ) : (
          <RecordBtn onClick={toggleFoodModalWindow}>
            + Record your meal
          </RecordBtn>
        )}
      </NutrientBlock>
    );
  };
  return DairyNutrientComponent;
};
