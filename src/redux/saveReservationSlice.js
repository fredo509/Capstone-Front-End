import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'http://localhost:4000/users/';

// Thunk to make the POST request
// Modify the saveReservation thunk
export const saveReservation = createAsyncThunk(
  'reservation/saveReservation',
  async (reservationData, { getState }) => {
    try {
      // Get the user's ID from the state or local storage
      const userId = getState().authorization.userId || localStorage.getItem('userId');

      if (!userId) {
        throw new Error('User ID not found.');
      }

      // Get the authorization token from local storage
      const token = localStorage.getItem('tokenKey');

      if (!token) {
        throw new Error('Authorization token not found.');
      }

      // Compose the full API endpoint URL
      const reservationApiEndpoint = `${baseURL}${userId}/reservations`;

      // Make the POST request
      const response = await fetch(reservationApiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        // Handle errors here if needed
        throw new Error('Failed to save reservation');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

// Define the initial state for your slice
const initialState = {
  loading: false,
  error: null,
  success: false,
};

// Create the saveReservation slice
const saveReservationSlice = createSlice({
  name: 'saveReservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(saveReservation.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(saveReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default saveReservationSlice.reducer;
