import { createSlice } from '@reduxjs/toolkit';

const waterSlice = createSlice({
  name: 'waterLevel',
  initialState: {
    waterLevel: 0,
  },
  reducers: {
    setWaterLevel(state, action) {
      state.waterLevel += +action.payload;
    },
    deleteWaterLevel(state) {
      state.waterLevel = 0;
    },
  },
});

export const { setWaterLevel, deleteWaterLevel } = waterSlice.actions;
export default waterSlice.reducer;
