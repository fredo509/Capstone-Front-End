import React from 'react';
import data from '../data/data.json';
import Card from './Card';
import '../styles/Reservations.css';
import '../styles/Home.scss';

function Reservations() {
  const roomsReserved = data.filter((el) => el.reserved === true);
  const cardRendering = roomsReserved.map((el) => (
    <Card
      key={el.id}
      name={el.name}
      description={el.description}
      price={el.price}
      img={el.img}
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
