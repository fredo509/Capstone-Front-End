import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './roomsSlice';
import reservationsReducer from './reservationsSlice';
import deleteReservationReducer from './reservationsDeleteSlice';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    reservations: reservationsReducer,
    deleteReservation: deleteReservationReducer,
  },
});

export default store;
