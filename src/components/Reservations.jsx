import React from 'react';
import { useSelector } from 'react-redux';
// import data from '../data/data.json';
import Card from './Card';
import '../styles/Reservations.css';
import '../styles/Home.scss';

function Reservations() {
  // const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.rooms);

  const roomsReserved = rooms.filter((el) => el.reserved === true);
  const cardRendering = roomsReserved.map((el) => (
    <Card
      id={el.id}
      key={el.id}
      name={el.name}
      description={el.description}
      cost={el.cost}
      photo={el.photo}
      className="card"
    />
  ));

  return (
    <>
      <div className="home-header">
        <h1 className="title">My Reservations</h1>
      </div>
      <div className="reservations-container flex">
        <div className="grid">
          {cardRendering}
        </div>
      </div>
    </>
  );
}

export default Reservations;
