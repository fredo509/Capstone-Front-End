import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  status: 'idle',
};

const url = 'https://rails-b62y.onrender.com';

// Fetch data from reservations table

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (userId) => {
    const token = localStorage.getItem('tokenKey');

    try {
      const response = await axios.get(`${url}/users/${userId}/reservations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const data = await response.data;
        return data;
      }
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

/* Post new reservation */
export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async ({ userId, reservationData }) => {
    const token = localStorage.getItem('tokenKey');

    try {
      const response = await axios.post(`${url}/users/${userId}/reservations`, {
        reservation: reservationData,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const data = await response.data;
        return data;
      }
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
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
      })
      // Add new reducers for createReservation action
      .addCase(createReservation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createReservation.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default reservationsSlice.reducer;
