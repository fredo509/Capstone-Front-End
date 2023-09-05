import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './roomsSlice';
import reservationsReducer from './reservationsSlice';
import deleteReservationReducer from './reservationsDeleteSlice';
import branchesReducer from './branchesSlice';
import branchRoomReducer from './branchRoomSlice';
import addReservationReducer from './addReservationSlice';
import authReducer from './authActions';
import usersReducer from './getUser';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    branches: branchesReducer,
    branchRoom: branchRoomReducer,
    reservations: reservationsReducer,
    deleteReservation: deleteReservationReducer,
    authorization: authReducer,
    users: usersReducer,
    pendingReservation: addReservationReducer,
  },
});

export default store;
