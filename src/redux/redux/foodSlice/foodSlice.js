import { createSlice } from '@reduxjs/toolkit';

const foodSlice = createSlice({
  name: 'takenFood',
  initialState: {
    breakfast: [
      {
        name: 'Jogurt',
        carbonohidrates: 1,
        protein: 30,
        fat: 8,
        calories: 100,
      },
      {
        name: 'Jogur',
        carbonohidrates: 1,
        protein: 30,
        fat: 8,
        calories: 100,
      },
      {
        name: 'Jogu',
        carbonohidrates: 1,
        protein: 30,
        fat: 8,
        calories: 100,
      },
    ],
    lunch: [],
    dinner: [
      {
        name: 'Sushi',
        carbonohidrates: 30,
        protein: 50,
        fat: 30,
        calories: 350,
      },
    ],
    snack: [
      {
        name: 'Candy',
        carbonohidrates: 2,
        protein: 2,
        fat: 5,
        calories: 150,
      },
    ],
  },
  reducers: {
    addFood(state, action) {
      const { mealType, food } = action.payload;
      state[mealType].push(food);
    },
    deleteFood(state, action) {
      const { mealType, foodName } = action.payload;
      state[mealType] = state[mealType].filter(meal => meal.name !== foodName);
    },
  },
});

export const { addFood, deleteFood, setIsWaterModalOpen } = foodSlice.actions;
export default foodSlice.reducer;
