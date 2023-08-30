import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../redux/reservationsSlice';
// import Card from './Card';
import '../styles/Reservations.css';
import '../styles/Home.scss';

function Reservations() {
  // Needs to:
  // Display reservations (from reservation table)
  // Be able to delete a reservation (from reservation table)
  const dispatch = useDispatch();
  const { status, reservations } = useSelector((state) => state.reservations);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReservations(2));
    }
  }, [status, dispatch]);

  return (
    <>
      <div className="home-header">
        <h1 className="title">My Reservations</h1>
      </div>
      <div className="reservations-container flex">
        <div className="grid">
          {reservations.map((reservation, i) => {
            console.log(reservation.rooms[i].name);
            return (
              <div key={reservation.id}>
                <p>{reservation.city}</p>
                <p>{reservation.rooms[i].name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Reservations;
