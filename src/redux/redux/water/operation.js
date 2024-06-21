// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// // import {
// //   fetchWaterLevelError,
// //   fetchWaterLevelSuccess,
// //   fetchWaterLevelStart,
// // } from './asyncSlice';

// axios.defaults.baseURL = 'http://localhost:8081';
// // export const fetchWaterInDB = () => async dispatch => {
// //   try {
// //     dispatch(fetchWaterLevelStart());
// //     const response = await axios.get('/api/water/');
// //     dispatch(fetchWaterLevelSuccess(response.data));
// //   } catch (error) {
// //     dispatch(fetchWaterLevelError(error.message));
// //   }
// // };
// export const fetchWaterInDB = createAsyncThunk(
//   'water/fetchWaterLevel',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/api/water/');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
