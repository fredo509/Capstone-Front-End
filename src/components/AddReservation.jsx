import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBranches } from '../redux/branchesSlice';
import { fetchRooms } from '../redux/branchRoomSlice';
import { saveReservation } from '../redux/saveReservationSlice';
import { clearReservation } from '../redux/addReservationSlice';
import { fetchReservations } from '../redux/reservationsSlice';
import '../styles/Home.scss';
import Card from './Card';
import '../styles/Reservations.css';
import '../styles/AddReservation.scss';

const AddReservation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  const branches = useSelector((state) => state.branches.data);
  const selectedBranchId = useSelector((state) => state.branchRoom.selectedBranchId);
  const rooms = useSelector((state) => state.branchRoom.data);
  const pendingReservation = useSelector((state) => state.pendingReservation);

  const handleBranchChange = (event) => {
    const selectedBranchId = event.target.value;
    dispatch(fetchRooms(selectedBranchId));
  };

  const handleSaveReservation = () => {
    dispatch(saveReservation(pendingReservation));
    dispatch(clearReservation());
    dispatch(fetchReservations(localStorage.getItem('userId')));
  };

  return (
    <>
      <section className="addRes-container">
        <h1 className="addRes-title">Reserve your Suite</h1>
        <p className="addRes-brief">Please select where you want to stay</p>
        <select value={selectedBranchId} onChange={handleBranchChange}>
          <option value="">Select a Branch</option>
          {branches.map((branch) => (
            <option key={branch.id} value={branch.id}>
              {branch.city}
            </option>
          ))}
        </select>
        {selectedBranchId && (
          <div>
            <h2 className="addRest-title">
              Our Rooms
            </h2>
            <div className="react-multi-carousel-item ma-25px">
              {rooms.map((room) => (
                <Card
                  id={room.id}
                  key={room.id}
                  name={room.name}
                  description={room.description}
                  cost={room.cost}
                  photo={room.photo}
                  showAddToReservationButton
                  roomCity={room.branch.city}
                />
              ))}
            </div>
          </div>
        )}
        <div className="reservation-data-container">
          <p>
            Total:
            {' '}
            $
            {pendingReservation.reservation.total_cost}
          </p>
          <button
            type="button"
            onClick={handleSaveReservation}
          >
            Reserve
          </button>
        </div>
      </section>
    </>
  );
};

export default AddReservation;
