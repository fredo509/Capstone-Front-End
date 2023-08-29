import React from 'react';
import data from '../data/data.json';
import Card from './Card';
import '../styles/Reservations.css';

const DeleteRooms = () => {
  const cardRendering = data.map((el) => (
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
        <h1 className="title">Select a room to delete</h1>
      </div>
      <div className="reservations-container flex">
        <div className="delete-grid">
          {cardRendering}
        </div>
      </div>
    </>
  );
};

export default DeleteRooms;
