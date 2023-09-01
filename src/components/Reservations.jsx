import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../redux/reservationsSlice';
import { deleteReservation } from '../redux/reservationsDeleteSlice';
import '../styles/Reservations.css';
import '../styles/Home.scss';

function Reservations() {
  const dispatch = useDispatch();
  const { status, reservations } = useSelector((state) => state.reservations);
  const { deletedReservation } = useSelector(
    (state) => state.deleteReservation,
  );
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (status === 'idle' && userId) {
      dispatch(fetchReservations(userId));
    }
  }, [status, dispatch, userId]);

  const onHanlde = (reservationId, userId) => {
    try {
      dispatch(deleteReservation({ reservationId, userId }));
    } catch (err) {
      throw new Error(err);
    }
  };

  if (!reservations || reservations.length === 0) {
    return <p className="title">No reservations made</p>;
  }

  return (
    <>
      <div className="home-header">
        <h1 className="title">My Reservations</h1>
      </div>
      {reservations.map((reservation) => {
        const reservationId = reservation.id;
        const userId = reservation.user_id;

        if (deletedReservation.length > 0) {
          return (
            <>
              <p className="title">No reservations made</p>
            </>
          );
        }

        return (
          <div key={reservation.id} className="reservations-container">
            <div className="reservation-card">
              <h2>
                Reservation id:
                {reservation.id}
              </h2>
              <div className="reservation-info flex">
                <p>
                  City:
                  {reservation.city}
                </p>
                <p>
                  Total Cost: $
                  {reservation.total_cost}
                </p>
                <p>
                  Reserved at:
                  {reservation.created_at}
                </p>
              </div>
              <h1>Rooms reserved:</h1>
              {reservation.rooms.map((room) => (
                <div key={room.id} className="each-room-reserved flex">
                  <div className="reservation-img">
                    <p>{room.name}</p>
                    <img src={room.photo} alt={room.name} />
                  </div>
                  <div>
                    <p>
                      Description:
                      {room.description}
                    </p>
                  </div>
                  <div>
                    <p>
                      Room Price:
                      {room.cost}
                    </p>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => onHanlde(reservationId, userId)}
                className="reservation-delete-btn"
              >
                Delete Reservation
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Reservations;
