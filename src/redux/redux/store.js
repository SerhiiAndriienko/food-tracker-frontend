// import { createStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalWindow/slice';
import waterReducer from './water/slice';
import foodReduser from './foodSlice/foodSlice';
// const rootReducer = combineReducers();
// const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    waterLevel: waterReducer,
    isModalOpen: modalReducer,
    food: foodReduser,
  },
});
