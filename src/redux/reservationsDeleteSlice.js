import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  deletedReservation: [],
  loading: false,
};

const url = 'https://rails-b62y.onrender.com';

// Delete data from the reservations table

export const deleteReservation = createAsyncThunk(
  'reservationsDelete/deleteReservation',
  async ({ reservationId, userId }) => {
    const token = localStorage.getItem('tokenKey');
    try {
      await axios.delete(
        `${url}/users/${userId}/reservations/${reservationId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return {
        reservationId,
        userId,
      };
    } catch (error) {
      console.error('Delete error:', error);
      throw error;
    }
  },
);

// Delete reservation slice

export const deleteReservationSlice = createSlice({
  name: 'reservationDelete',
  initialState,
  reducers: {
    restartDeleteReservation: (state) => {
      state.deletedReservation = [];
    },
  },
  extraReducers: (build) => {
    build
      .addCase(deleteReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.loading = false;
        const { reservationId, userId } = action.payload;
        state.deletedReservation.push({ reservationId, userId });
      })
      .addCase(deleteReservation.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { restartDeletedReservation } = deleteReservationSlice.actions;
export default deleteReservationSlice.reducer;
