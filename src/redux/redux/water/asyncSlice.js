import { createSlice } from '@reduxjs/toolkit';
import { fetchWaterInDB } from './operation';
const waterAsyncSlice = createSlice({
  name: 'water',
  initialState: {
    water: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWaterInDB.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWaterInDB.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.water = action.payload;
      })
      .addCase(fetchWaterInDB.rejected, (state, action) => {
        state.isLoading = false;
        state.water = 0;
        state.error = action.error.message;
      });
  },
});

// export const {
//   fetchWaterLevelError,
//   fetchWaterLevelSuccess,
//   fetchWaterLevelStart,
// } = waterAsyncSlice.actions;

export default waterAsyncSlice.reducer;
