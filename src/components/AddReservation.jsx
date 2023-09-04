import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBranches } from '../redux/roomsSlice'; // Import the fetchBranches action

import '../styles/Home.scss';

const AddReservation = () => {
  console.log('Rendering');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  const branches = useSelector((state) => state.branches);

  console.log('branches:', branches);

  return (
    <>
      <section className="home-container">
        <h1 className="home-title">Reserve your Suite</h1>
        <p className="home-brief">Please select where you want to stay</p>
        <ul>
          {branches.map((branch) => (
            <li key={branch.id}>{branch.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AddReservation;
