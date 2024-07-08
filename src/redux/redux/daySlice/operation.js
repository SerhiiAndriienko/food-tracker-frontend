import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthhub.onrender.com';
// axios.defaults.baseURL = 'http://localhost:8081';

export const fetchDayInDB = createAsyncThunk(
  'day/fetchDay',
  async (owner, thunkAPI) => {
    try {
      const id = sessionStorage.getItem('id');

      if (id) {
        const response = await axios.get(`/api/days/${id}`);

        return response.data;
      }

      const response = await axios.get(`/api/days/${owner}`);

      sessionStorage.setItem('id', response.data._id);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateDay = createAsyncThunk(
  'days/updateDay',
  async ({ data, id }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/days/updateDataOfDay/${id}`, {
        data,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createDayInDB = createAsyncThunk(
  'day/createDay',
  async (owner, thunkAPI) => {
    try {
      const response = await axios.post(`/api/days/createDay/${owner}`);
      sessionStorage.setItem('id', response.data._id);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateDayOwner = createAsyncThunk(
  'days/updateDayOwner',
  async ({ userId, dayId }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/days/updateDay/${dayId}`, {
        owner: userId,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
