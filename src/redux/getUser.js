/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  status: 'idle',
  users: [],
};

/* API Url */
const url = 'https://rails-b62y.onrender.com';

// Fetch Current User information

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const token = localStorage.getItem('tokenKey');

  try {
    const response = await axios.get(`${url}/current_user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const data = await response.data;
      localStorage.setItem('userId', JSON.stringify(data.id));
      return data;
    }

    return response.data.id;
  } catch (error) {
    throw new Error(error);
  }
});

/* Reducer */
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'success';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { login, logout } = usersSlice.actions;

export default usersSlice.reducer;
