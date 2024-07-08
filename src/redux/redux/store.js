import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalWindow/slice';
import dayAsyncSlice from './daySlice/asyncSlice';
import userAsyncSlice from './userSlice/asyncSlice';

export const store = configureStore({
  reducer: {
    isModalOpen: modalReducer,
    day: dayAsyncSlice,
    user: userAsyncSlice,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(asyncDispatchMiddleware),
});
