import useMediaQuery from 'helpers/mediaQuery';
import {
  NutrientBlock,
  NutrientInfo,
  NutrientStatistics,
  Nutrients,
  RecordBtn,
} from './Diary.styled';

export const DairyNutrientComponent = (
  eatingTime,
  carbonohidrates,
  protein,
  fat
) => {
  const DairyNutrientComponent = () => {
    const isMobile = useMediaQuery('(max-width:833px)');

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
          <RecordBtn>+ Record your meal</RecordBtn>
        )}
      </NutrientBlock>
    );
  };
  return DairyNutrientComponent;
};
