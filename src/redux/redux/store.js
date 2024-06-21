import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalWindow/slice';
import dayAsyncSlice from './daySlice/asyncSlice';

export const store = configureStore({
  reducer: {
    isModalOpen: modalReducer,
    day: dayAsyncSlice,
  },
});
