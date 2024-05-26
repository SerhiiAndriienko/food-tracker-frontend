import { createSlice } from '@reduxjs/toolkit';

const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState: {
    isMainModalOpen: false,
    isWaterModalOpen: false,
    foodInfo: {
      isFoodModalOpen: false,
      mealsType: '',
    },
  },
  reducers: {
    setIsMainModalOpen(state, action) {
      state.isMainModalOpen = action.payload;
    },
    setIsWaterModalOpen(state, action) {
      state.isWaterModalOpen = action.payload;
    },
    setIsFoodModalOpen(state, action) {
      state.foodInfo.isFoodModalOpen = action.payload;
    },
    setMealsType(state, action) {
      state.foodInfo.mealsType = action.payload;
    },
  },
});
export const {
  setIsMainModalOpen,
  setIsFoodModalOpen,
  setIsWaterModalOpen,
  setMealsType,
} = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
