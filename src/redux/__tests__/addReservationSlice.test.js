import { configureStore } from '@reduxjs/toolkit';
import addReservationReducer, {
  clearReservation,
  updateTotal,
  addRoomId,
  setReservationUserId,
  setReservationCity,
} from '../addReservationSlice';

describe('addReservationSlice reducers', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        addReservation: addReservationReducer,
      },
    });
  });

  it('should clear reservation', () => {
    store.dispatch(clearReservation());
    const reservation = store.getState().addReservation.reservation;
    expect(reservation.room_ids).toEqual([]);
    expect(reservation.total_cost).toBe(0);
  });

  it('should update total cost', () => {
    const newTotal = 100;
    store.dispatch(updateTotal(newTotal));
    const reservation = store.getState().addReservation.reservation;
    expect(reservation.total_cost).toBe(newTotal);
  });

  it('should add and remove room id', () => {
    const roomId = 1;

    // Add room id
    store.dispatch(addRoomId(roomId));
    let roomIds = store.getState().addReservation.reservation.room_ids;
    expect(roomIds).toContain(roomId);

    // Remove room id
    store.dispatch(addRoomId(roomId));
    roomIds = store.getState().addReservation.reservation.room_ids;
    expect(roomIds).not.toContain(roomId);
  });

  it('should set reservation user ID', () => {
    const userId = 123;
    store.dispatch(setReservationUserId(userId));
    const reservation = store.getState().addReservation.reservation;
    expect(reservation.user_id).toBe(userId);
  });

  it('should set reservation city', () => {
    const city = 'New York';
    store.dispatch(setReservationCity(city));
    const reservation = store.getState().addReservation.reservation;
    expect(reservation.city).toBe(city);
  });
});
