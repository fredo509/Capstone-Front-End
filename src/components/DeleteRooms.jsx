import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRooms } from '../redux/roomsSlice';

import Card from './Card';
import '../styles/Reservations.css';

const DeleteRooms = () => {
  const dispatch = useDispatch();
  const { rooms, status } = useSelector((state) => state.rooms);

  useEffect(() => {
    if (status === 'idle' && rooms.length === 0) {
      dispatch(fetchRooms());
    }
  }, [status, dispatch, rooms]);

  return (
    <>
      <div className="home-header">
        <h1 className="title">Select a room to delete</h1>
      </div>
      <div className="reservations-container flex">
        <div className="delete-grid">
          {rooms.map((room) => (
            <Card
              id={room.id}
              key={room.id}
              name={room.name}
              description={room.description}
              cost={room.cost}
              photo={room.photo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DeleteRooms;
