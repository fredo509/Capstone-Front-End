import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservation: {
    reservation_date: '2023-08-23',
    city: 'New York',
    totalCost: 0,
    user_id: 0,
    room_ids: [],
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
      state.reservation.totalCost = action.payload;
    },
    setReservationUserId: (state, action) => {
      state.reservation.user_id = action.payload;
    },
    addRoomId: (state, action) => {
      const roomId = action.payload;
      const roomIds = state.reservation.room_ids;

      // Check if the ID is already in the array
      const index = roomIds.indexOf(roomId);

      if (index === -1) {
        // ID is not in the array, so add it
        state.reservation.room_ids.push(roomId);
      } else {
        // ID is already in the array, so remove it
        state.reservation.room_ids.splice(index, 1);
      }
    },
  },
});

export const { clearReservation, updateTotal, addRoomId } = addReservationSlice.actions;

export default addReservationSlice.reducer;
