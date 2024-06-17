import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchWaterLevelError,
//   fetchWaterLevelSuccess,
//   fetchWaterLevelStart,
// } from './asyncSlice';

// export const fetchWaterInDB = () => async dispatch => {
//   try {
//     dispatch(fetchWaterLevelStart());
//     const response = await axios.get('/api/water/');
//     dispatch(fetchWaterLevelSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchWaterLevelError(error.message));
//   }
// };

axios.defaults.baseURL = 'http://localhost:8081';

export const fetchDayInDB = createAsyncThunk(
  'day/fetchDay',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/days/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createDayInDB = createAsyncThunk(
  'day/createDay',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/api/days/createDay');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
