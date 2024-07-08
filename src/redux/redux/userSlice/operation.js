import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthhub.onrender.com';
// axios.defaults.baseURL = 'http://localhost:8081';

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async ({ id, token }, thunkAPI) => {
    try {
      const response = await axios.get(`/api/auth/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const registerUser = createAsyncThunk(
  'users/registerUser',
  async ({ userName, email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`/api/auth/register`, {
        userName,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/api/auth/login`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setUserData = createAsyncThunk(
  'users/setUserData',
  async ({ userId, data }, thunkAPI) => {
    try {
      const response = await axios.post(`/api/auth/setData/${userId}`, data);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const checkToken = createAsyncThunk(
  'users/checkToken',
  async (token, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/auth/checkToken/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateDataOfUser = createAsyncThunk(
  'user/updateDataOfUser',
  async ({ data, id }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/auth/updateDataOfUser/${id}`, {
        data,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
