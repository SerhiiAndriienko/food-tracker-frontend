import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import deleteImg from '../../public/img/trash-03.svg';

import {
  AddBtn,
  ButtonsDiv,
  CancelBtn,
  Container,
  DeleteBtn,
  MealsType,
  MealsTypeContainer,
  NameInput,
  NutrientInput,
} from './ModalAddFood.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getIsMainModalOpen } from '../../redux/redux/modalWindow/selectors';
import {
  setIsFoodModalOpen,
  setIsMainModalOpen,
} from '../../redux/redux/modalWindow/slice';

import { addFood } from '../../redux/redux/foodSlice/foodSlice';
export default function ModalAddFood() {
  const dispatch = useDispatch();
  const isMainModalOpen = useSelector(getIsMainModalOpen);
  const isFoodModalOpen = useSelector(
    state => state.isModalOpen.foodInfo.isFoodModalOpen
  );

  const mealsType = useSelector(state => state.isModalOpen.foodInfo.mealsType);
  const eatingImg = () => {
    switch (mealsType) {
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

  //   e.preventDefault();
  //   dispatch(
  //     addFood({
  //       mealType: 'breakfast',
  //       food: {
  //         name: 'egg',
  //         carbonohidrates: 10,
  //         protein: 10,
  //         fat: 10,
  //       },
  //     })
  //   );
  // };

  // const addWater = () => {
  //   if (!waterIntake || isNaN(waterIntake)) {
  //     toast.error('Please enter a valid water intake amount.');
  //   } else {
  //     dispatch(setIsMainModalOpen(!isModalOpen));
  //     dispatch(setIsWaterModalOpen(!isAddWaterModalOpen));

  //     dispatch(setWaterLevel(waterIntake));
  //   }
  // };
  const handleAddFood = event => {
    const nameInput = document.getElementById('nameInput');
    const carbonohidratesInput = document.getElementById(
      'carbonohidratesInput'
    );
    const proteinInput = document.getElementById('proteinInput');
    const fatInput = document.getElementById('fatInput');
    const caloriesInput = document.getElementById('caloriesInput');

    const name = nameInput.value;
    const carbonohidrates = parseFloat(carbonohidratesInput.value);
    const protein = parseFloat(proteinInput.value);
    const fat = parseFloat(fatInput.value);
    const calories = parseFloat(caloriesInput.value);
    if (
      !name ||
      isNaN(carbonohidrates) ||
      isNaN(protein) ||
      isNaN(fat) ||
      isNaN(calories)
    ) {
      toast.error('Please enter a valid food information.');
      return;
    }

    dispatch(
      addFood({
        mealType: mealsType.toLowerCase(),
        food: {
          name: name,
          carbonohidrates: carbonohidrates,
          protein: protein,
          fat: fat,
          calories: calories,
        },
      })
    );
    nameInput.value = '';
    carbonohidratesInput.value = '';
    proteinInput.value = '';
    fatInput.value = '';
    caloriesInput.value = '';
    dispatch(setIsMainModalOpen(!isMainModalOpen));
    dispatch(setIsFoodModalOpen(!isFoodModalOpen));
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleAddFood();
    }
  };

  return (
    <Container>
      <h3>Record your meal</h3>
      <div>
        <MealsTypeContainer>
          <img src={eatingImg()} alt="Meals Img" />
          <MealsType>{mealsType}</MealsType>
        </MealsTypeContainer>
        <NameInput
          id="nameInput"
          placeholder="The name of the product or dish"
          onKeyDown={handleKeyPress}
        ></NameInput>
        <NutrientInput
          id="carbonohidratesInput"
          placeholder="Carbonoh."
          onKeyDown={handleKeyPress}
        ></NutrientInput>
        <NutrientInput
          id="proteinInput"
          placeholder="Protein"
          onKeyDown={handleKeyPress}
        ></NutrientInput>
        <div>
          <NutrientInput
            id="fatInput"
            placeholder="Fat"
            onKeyDown={handleKeyPress}
          ></NutrientInput>
          <NutrientInput
            id="caloriesInput"
            placeholder="Calories"
            onKeyDown={handleKeyPress}
          ></NutrientInput>
        </div>
        <DeleteBtn
          src={deleteImg}
          alt="deleteImg"
          height={'20px'}
          // onClick={deleteWater}
        />
        <ButtonsDiv>
          <AddBtn onClick={handleAddFood}>Confirm</AddBtn>
          <CancelBtn>Cancel</CancelBtn>
        </ButtonsDiv>
      </div>
    </Container>
  );
}