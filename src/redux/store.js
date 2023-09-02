import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './roomsSlice';
import reservationsReducer from './reservationsSlice';
import deleteReservationReducer from './reservationsDeleteSlice';
import authReducer from './authActions';
import usersReducer from './getUser';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    reservations: reservationsReducer,
    deleteReservation: deleteReservationReducer,
    authorization: authReducer,
    users: usersReducer,
  },
});

export default store;
