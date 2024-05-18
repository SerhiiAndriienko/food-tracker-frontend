import { createSlice } from '@reduxjs/toolkit';

const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState: {
    isModalOpen: false,
  },
  reducers: {
    setIsModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});
export const { setIsModalOpen } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
