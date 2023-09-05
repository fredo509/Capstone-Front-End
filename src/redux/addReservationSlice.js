import { createSlice } from '@reduxjs/toolkit';

// Function to get the userId from local storage
const getUserIdFromLocalStorage = () => {
  const userId = localStorage.getItem('userId');
  return userId ? parseInt(userId, 10) : 0;
};

const initialState = {
  reservation: {
    reservation_date: '2023-08-23',
    city: 'New York',
    total_cost: 0,
    user_id: getUserIdFromLocalStorage(),
    room_ids: [],
  },
};
/* eslint-disable camelcase */
const addReservationSlice = createSlice({
  name: 'addReservation',
  initialState,
  reducers: {
    clearReservation: (state) => {
      state.reservation = {
        reservation_date: '2023-08-23',
        city: 'New York',
        total_cost: 0,
        user_id: 0,
        room_ids: [],
      };
    },
    setReservationDate: (state, action) => {
      state.reservation.reservation_date = action.payload;
    },
    setReservationCity: (state, action) => {
      state.reservation.city = action.payload;
    },
    updateTotal: (state, action) => {
      state.reservation.total_cost = action.payload;
    },
    setReservationUserId: (state, action) => {
      // Parse the payload as an integer
      state.reservation.user_id = parseInt(action.payload, 10);
    },
    addRoomId: (state, action) => {
      const roomId = action.payload;
      const { room_ids } = state.reservation;

      // If room_ids already contains the roomId, remove it
      if (room_ids.includes(roomId)) {
        state.reservation.room_ids = room_ids.filter((id) => id !== roomId);
      } else {
        state.reservation.room_ids.push(roomId);
      }
    },
  },
});

export const {
  clearReservation, updateTotal, addRoomId,
  setReservationUserId,
} = addReservationSlice.actions;

export default addReservationSlice.reducer;
