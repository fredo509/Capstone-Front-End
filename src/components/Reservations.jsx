import React from 'react';
import data from '../data/data.json';
import Card from './Card';
import '../styles/Reservations.css';

function Reservations() {
  let cardRendering;

  if (data.length > 0) {
    cardRendering = data.map((item) => (
      <Card
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        img={item.img}
      />
    ));
  }

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
