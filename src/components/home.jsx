import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { fetchRooms } from '../redux/roomsSlice';

import '../styles/Home.scss';
import '../styles/Carousel.css';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';

const Home = () => {
  const dispatch = useDispatch();
  const { rooms, status } = useSelector((state) => state.rooms);

  useEffect(() => {
    if (status === 'idle' && rooms.length === 0) {
      dispatch(fetchRooms());
    }
  }, [status, dispatch, rooms]);

  const responsive = {
    superLargeDesktop: {
    // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };
  return (
    <section className="home-container">
      <h1 className="home-title">All suites</h1>
      <p className="home-brief">Please click on any of the suites to get more information</p>
      <Carousel responsive={responsive}>
        {rooms.map((room) => (
          <Card
            key={room.id}
            name={room.name}
            description={room.description}
            cost={room.cost}
            photo={room.photo}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default Home;
