import React from 'react';
import '../styles/Home.css';
import EmblaCarousel from './Carousel';
import data from '../data/data.json';
import RoomList from './RoomList';

const options = {
  dragFree: true,
  containScroll: 'trimSnaps',
};
const SLIDE_COUNT = data.length / 3;
const slides = Array.from(Array(SLIDE_COUNT).keys()).map(() => data);

const home = () => (
  <>
    <div className="home-container">
      <div className="flex home-header">
        <h1 className="title">Our Rooms!</h1>
        <p className="header-text">Please, select your room</p>
        <p className="header-subtext">Slide right to see more!</p>
      </div>
      <EmblaCarousel slides={slides} options={options} />
      <RoomList />
    </div>
  </>
);

export default home;
