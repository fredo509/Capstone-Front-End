import { createSlice } from '@reduxjs/toolkit';

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const initialState = {
  reservation: {
    reservation_date: getCurrentDate(),
    city: '',
    total_cost: 0,
    user_id: 0,
    room_ids: [],
  },
};
/* eslint-disable camelcase */
const addReservationSlice = createSlice({
  name: 'addReservation',
  initialState,
  reducers: {
    clearReservation: (state) => {
      state.reservation.room_ids = [];
      state.reservation.total_cost = 0;
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
  setReservationUserId, setReservationCity,
} = addReservationSlice.actions;

export default addReservationSlice.reducer;
