import React from 'react';
import '../styles/Home.css';
import EmblaCarousel from './Carousel';
import data from '../data/data.json';
import RoomList from './RoomList';

const options = {
  dragFree: true,
  containScroll: 'trimSnaps',
};
const SLIDE_COUNT = (data.length / 3);
const slides = Array.from(Array(SLIDE_COUNT).keys()).map(() => data);

const home = () => {
  const counter = 0;
  return (
    <>
      <h1>Our Rooms!</h1>
      <p>Please, select your room</p>
      <div>
        <p>{counter}</p>
      </div>
      <EmblaCarousel slides={slides} options={options} />
      <RoomList />
    </>
  );
};

export default home;
