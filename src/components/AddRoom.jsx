import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRoom, fetchRooms } from '../redux/roomsSlice';
import { fetchBranches } from '../redux/branchesSlice';
import '../styles/Forms.scss';

const AddRoom = () => {
  const dispatch = useDispatch();
  const branches = useSelector((state) => state.branches.data);
  console.log(branches);
  const [roomData, setRoomData] = useState({
    name: '',
    photo: '',
    cost: 0,
    description: '',
    guest: 0,
    beds: 0,
    branch_id: '',
  });

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(createRoom(roomData));
      console.log('Room created:', response.payload);
    } catch (error) {
      console.error('Error creating room:', error);
    }
    dispatch(fetchRooms());
  };

  return (
    <section className="login-container create-room-form">
      <h2 className="form-title">Add a Room</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container input-create">
          <p className="form-label">Name:</p>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Room Name"
            className="input-create-room"
            value={roomData.name}
            onChange={handleChange}
          />
          <p className="form-label">Photo URL:</p>
          <input
            type="text"
            id="photo"
            name="photo"
            placeholder="Photo URL"
            className="input-create-room"
            value={roomData.photo}
            onChange={handleChange}
          />
          <p className="form-label">Cost:</p>
          <input
            type="number"
            id="cost"
            name="cost"
            placeholder="Cost per night"
            className="input-create-room"
            value={roomData.cost}
            onChange={handleChange}
          />
          <p className="form-label">Description:</p>
          <textarea
            id="description"
            name="description"
            placeholder="Room Description"
            className="input-create-room"
            style={{ width: 'auto', height: '80px' }}
            value={roomData.description}
            onChange={handleChange}
          />
          <p className="form-label">Guest Count:</p>
          <input
            type="number"
            id="guest"
            name="guest"
            placeholder="Guest Count"
            className="input-create-room"
            value={roomData.guest}
            onChange={handleChange}
          />
          <p className="form-label">Bed Count:</p>
          <input
            type="number"
            id="beds"
            name="beds"
            placeholder="Bed Count"
            className="input-create-room"
            value={roomData.beds}
            onChange={handleChange}
          />
          <p className="form-label">Branch ID:</p>
          <select
            id="branch_id"
            name="branch_id"
            value={roomData.branch_id}
            onChange={handleChange}
          >
            <option value="">Select a branch</option>
            {branches.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.city}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Room</button>
      </form>
    </section>
  );
};

export default AddRoom;
