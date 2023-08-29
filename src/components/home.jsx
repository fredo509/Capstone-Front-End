import '../styles/Home.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from '../data/data.json';
import Card from './Card';

const Home = () => {
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
        {cardRendering}
      </Carousel>
    </section>
  );
};

export default Home;
