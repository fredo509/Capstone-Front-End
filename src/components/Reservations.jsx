import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../redux/reservationsSlice';
import { deleteReservation } from '../redux/reservationsDeleteSlice';
import '../styles/Reservations.css';
import '../styles/Home.scss';

function Reservations() {
  const dispatch = useDispatch();
  const { status, reservations } = useSelector((state) => state.reservations);
  const { deletedReservation } = useSelector((state) => state.deleteReservation);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReservations(2));
    }
  }, [status, dispatch]);

  const onHanlde = (reservationId, userId) => {
    try {
      dispatch(deleteReservation({ reservationId, userId }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="home-header">
        <h1 className="title">My Reservations</h1>
      </div>
      <div className="reservations-container flex">
        <div className="grid">
          {reservations.map((reservation, i) => {
            const reservationId = reservation.id;
            const userId = reservation.user_id;

            const deleted = deletedReservation.some((el) => el.id === reservationId);
            if (deleted) {
              return null;
            }

            return (
              <div key={reservation.id}>
                <p>{reservation.city}</p>
                <p>{reservation.rooms[i].name}</p>
                <p>{reservationId}</p>
                <p>{userId}</p>
                <button type="button" onClick={() => onHanlde(reservationId, userId)} className="reservation-delete-btn">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Reservations;
