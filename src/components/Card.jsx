import { PropTypes } from 'prop-types';

const Card = ({
  name, img, description, price,
}) => {
  const counter = 0;
  return (
    <div className="card-container">
      <h2>
        {name}
        {counter}
      </h2>
      <a href="/">
        <img
          className="embla__slide__img"
          src={img}
          alt="Your alt text"
        />
      </a>
      <p>
        {description}
      </p>
      <p>
        {price}
      </p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
