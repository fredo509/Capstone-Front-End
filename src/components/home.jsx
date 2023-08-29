import React from 'react';
import '../styles/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretLeft, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';
import EmblaCarousel from './Carousel';
import data from '../data/data.json';
import RoomList from './RoomList';

const options = {
  dragFree: true,
  containScroll: 'trimSnaps',
};
const SLIDE_COUNT = data.length / 3;
const slides = Array.from(Array(SLIDE_COUNT).keys()).map(() => data);

const Home = () => (
  <>
    <section className="home-container">
      <div className="flex home-header">
        <h1 className="title">Our Rooms</h1>
        <p className="header-text">Pleas select a room</p>
      </div>
      <div className="arrows">
        <div className="arrow arrow-left">
          <FontAwesomeIcon icon={faSquareCaretLeft} />
        </div>
        <div className="arrow arrow-right">
          <FontAwesomeIcon icon={faSquareCaretRight} />
        </div>
      </div>
      <EmblaCarousel slides={slides} options={options} />
      <RoomList />
    </section>
  </>
);

export default Home;
