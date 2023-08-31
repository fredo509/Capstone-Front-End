import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
  status: 'idle',
};

const url = 'http://localhost:3000';

// Fetch data from reservations table

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (userId) => {
    const response = await fetch(`${url}/users/${userId}/reservations`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Something went wrong');
  },
);

// Reservation slice

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  extraReducers: (build) => {
    build
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'success';
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default reservationsSlice.reducer;
