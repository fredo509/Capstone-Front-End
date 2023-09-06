import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRooms } from '../redux/roomsSlice';
import Card from './Card';
import '../styles/DeleteRooms.scss';

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
      <div className="delete-header">
        <h1 className="delete-title">Select a room to delete</h1>
      </div>
      <div className="delete-container">
        <div className="delete-grid">
          {rooms.map((room) => (
            <Card
              id={room.id}
              key={room.id}
              name={room.name}
              description={room.description}
              cost={room.cost}
              photo={room.photo}
              showDeleteButton
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DeleteRooms;
