import { createSlice } from '@reduxjs/toolkit';
import { fetchDayInDB, createDayInDB } from './operation';
const dayAsyncSlice = createSlice({
  name: 'day',
  initialState: {
    id: null,
    water: 0,
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
    goal: 'Gain muscle',
    weight: 0,
    isWeightChange: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    setGoal(state, action) {
      state.goal = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDayInDB.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDayInDB.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.id = action.payload._id;
        state.water = action.payload.water;
        state.breakfast = action.payload.breakfast;
        state.lunch = action.payload.lunch;
        state.dinner = action.payload.dinner;
        state.snack = action.payload.snack;
      })
      .addCase(fetchDayInDB.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createDayInDB.pending, state => {
        state.isLoading = true;
      })
      .addCase(createDayInDB.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.id = action.payload._id;
        state.water = action.payload.water;
        state.breakfast = action.payload.breakfast;
        state.lunch = action.payload.lunch;
        state.dinner = action.payload.dinner;
        state.snack = action.payload.snack;
      })
      .addCase(createDayInDB.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setGoal } = dayAsyncSlice.actions;
export default dayAsyncSlice.reducer;
