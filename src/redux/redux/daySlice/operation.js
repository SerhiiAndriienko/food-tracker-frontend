import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
