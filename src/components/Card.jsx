import { PropTypes } from 'prop-types';

const Card = ({
  name, img, description, price,
}) => (
  <div className="display-card-container">
    <h2 className="display-card-title">{name}</h2>
    <a href="/">
      <img className="embla__slide__img" src={img} alt="Your alt text" />
    </a>
    <div className="card-content">
      <p>{description}</p>
      <p>
        $
        {price}
      </p>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
