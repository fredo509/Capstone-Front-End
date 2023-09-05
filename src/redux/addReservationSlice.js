import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservation: {
    reservation_date: '2023-08-23',
    city: 'New York',
    totalCost: 0,
    user_id: 0,
    roomIds: [],
  },
};

const addReservationSlice = createSlice({
  name: 'addReservation',
  initialState,
  reducers: {
    clearReservation: (state) => {
      state.reservation = {
        reservation_date: '2023-08-23',
        city: 'New York',
        totalCost: 0,
        user_id: 0,
        roomIds: [],
      };
    },
    setReservationDate: (state, action) => {
      state.reservation.reservation_date = action.payload;
    },
    setReservationCity: (state, action) => {
      state.reservation.city = action.payload;
    },
    updateTotal: (state, action) => {
      state.reservation.totalCost = action.payload;
    },
    setReservationUserId: (state, action) => {
      state.reservation.user_id = action.payload;
    },
    addRoomId: (state, action) => {
      const roomId = action.payload;
      const { roomIds } = state.reservation;

      // If roomIds already contains the roomId, remove it
      if (roomIds.includes(roomId)) {
        state.reservation.roomIds = roomIds.filter((id) => id !== roomId);
      } else {
        state.reservation.roomIds.push(roomId);
      }
    },
  },
});

export const { clearReservation, updateTotal, addRoomId } = addReservationSlice.actions;

export default addReservationSlice.reducer;
