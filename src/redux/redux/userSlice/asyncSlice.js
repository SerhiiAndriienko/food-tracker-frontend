import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, updateDataOfUser } from './operation';
const userAsyncSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    email: null,
    token: null,
    id: null,
    gender: null,
    goal: null,

    age: null,
    height: null,
    weight: null,
    activity: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.id = action.payload.id;
        state.userName = action.payload.userName;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.gender = action.payload.gender;
        state.age = action.payload.age;
        state.weight = action.payload.weight;
        state.goal = action.payload.goal;
        state.height = action.payload.height;
        state.activity = action.payload.activity;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateDataOfUser.fulfilled, (state, action) => {
        state.user = action.payload;
        if (action.payload.goal) {
          state.goal = action.payload.goal;
        }
        if (action.payload.weight) {
          state.weight = action.payload.weight;
        }
      })
      .addCase(updateDataOfUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userAsyncSlice.reducer;
