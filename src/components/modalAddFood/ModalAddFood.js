import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import deleteImg from '../../public/img/trash-03.svg';
import useMediaQuery from 'helpers/mediaQuery';
import axios from 'axios';
import {
  AddBtn,
  ButtonsDiv,
  CancelBtn,
  Container,
  DeleteBtn,
  FatAndCaloriesContainer,
  InputsContainer,
  MealsType,
  MealsTypeContainer,
  NutrientInput,
} from './ModalAddFood.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getIsMainModalOpen } from '../../redux/redux/modalWindow/selectors';
import {
  setIsFoodModalOpen,
  setIsMainModalOpen,
} from '../../redux/redux/modalWindow/slice';

import { fetchDayInDB } from '../../redux/redux/daySlice/operation';
import Loader from 'components/loader/Loader';
import { useState } from 'react';

export default function ModalAddFood() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const BASE_URL = 'https://healthhub.onrender.com/api';
  const id = useSelector(state => state.day.id);
  const isMainModalOpen = useSelector(getIsMainModalOpen);
  const isFoodModalOpen = useSelector(
    state => state.isModalOpen.foodInfo.isFoodModalOpen
  );

  const isTablet = useMediaQuery('(min-width:835px)');

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

  const handleAddFood = async () => {
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
    try {
      setIsLoading(true);
      const response = await axios.post(`${BASE_URL}/days/updateFood/${id}`, {
        mealsType: mealsType.toLowerCase(),
        food: {
          name: name,
          carbonohidrates: carbonohidrates,
          protein: protein,
          fat: fat,
          calories: calories,
        },
      });
      if (response.data) {
        setIsLoading(false);
        dispatch(fetchDayInDB(id));
      }
      nameInput.value = '';
      carbonohidratesInput.value = '';
      proteinInput.value = '';
      fatInput.value = '';
      caloriesInput.value = '';

      dispatch(setIsMainModalOpen(!isMainModalOpen));
      dispatch(setIsFoodModalOpen(!isFoodModalOpen));
    } catch (error) {
      setIsLoading(false);

      console.error('Failed to add food:', error);
      toast.error('Failed to add food. Please try again.');
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleAddFood();
    }
  };

  const cancelBtn = () => {
    dispatch(setIsMainModalOpen(!isMainModalOpen));
    dispatch(setIsFoodModalOpen(!isFoodModalOpen));
  };
  return (
    <>
      {isLoading && <Loader></Loader>}
      <Container>
        <h3>Record your meal</h3>
        <div>
          <MealsTypeContainer>
            <img src={eatingImg()} alt="Meals Img" />
            <MealsType>{mealsType}</MealsType>
          </MealsTypeContainer>
          <InputsContainer>
            <NutrientInput
              style={{ width: '300px' }}
              id="nameInput"
              size="large"
              placeholder="The name of the product or dish"
              onKeyDown={handleKeyPress}
            ></NutrientInput>
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
            {!isTablet && (
              <FatAndCaloriesContainer>
                <NutrientInput
                  id="fatInput"
                  placeholder="Fat"
                  size="small"
                  onKeyDown={handleKeyPress}
                ></NutrientInput>
                <NutrientInput
                  id="caloriesInput"
                  placeholder="Calories"
                  onKeyDown={handleKeyPress}
                ></NutrientInput>
                <DeleteBtn src={deleteImg} alt="deleteImg" height={'20px'} />
              </FatAndCaloriesContainer>
            )}
            {isTablet && (
              <>
                <NutrientInput
                  id="fatInput"
                  placeholder="Fat"
                  size="small"
                  onKeyDown={handleKeyPress}
                ></NutrientInput>
                <NutrientInput
                  id="caloriesInput"
                  placeholder="Calories"
                  onKeyDown={handleKeyPress}
                ></NutrientInput>
                <DeleteBtn src={deleteImg} alt="deleteImg" height={'20px'} />
              </>
            )}
          </InputsContainer>

          <ButtonsDiv>
            <AddBtn onClick={handleAddFood}>Confirm</AddBtn>
            <CancelBtn onClick={cancelBtn}>Cancel</CancelBtn>
          </ButtonsDiv>
        </div>
      </Container>
    </>
  );
}
