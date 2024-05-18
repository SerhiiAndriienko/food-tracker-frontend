import { createSlice } from '@reduxjs/toolkit';

const waterSlice = createSlice({
  name: 'waterLevel',
  initialState: {
    waterLevel: 0,
    isModalOpen: false,
  },
  reducers: {
    setWaterLevel(state, action) {
      state.waterLevel += +action.payload;
    },
    deleteWaterLevel(state) {
      state.waterLevel = 0;
    },
    setIsWaterModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setWaterLevel, deleteWaterLevel, setIsWaterModalOpen } =
  waterSlice.actions;
export default waterSlice.reducer;
