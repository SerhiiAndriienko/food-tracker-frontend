// import { createStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalWindow/slice';
import dayAsyncSlice from './daySlice/asyncSlice';
// import waterReducer from './water/slice';
// import foodReduser from './foodSlice/foodSlice';
import waterAsyncSlice from './water/asyncSlice';
// const rootReducer = combineReducers();
// const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    waterInDB: waterAsyncSlice,
    // waterLevel: waterReducer,
    isModalOpen: modalReducer,
    day: dayAsyncSlice,
    // food: foodReduser,
  },
});
