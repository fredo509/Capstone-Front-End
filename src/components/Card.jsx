import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteRoom, deleteRoomReducer } from '../redux/roomsSlice';

const Card = ({
  id, name, photo, description, cost,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRoom(id));
    dispatch(deleteRoomReducer(id));
  };

  return (
    <div className="display-card-container">
      <h2 className="display-card-title">{name}</h2>
      <div className="card-img-container">
        <a href="/">
          <img className="embla__slide__img" src={photo} alt="Your alt text" />
        </a>
      </div>
      <div className="card-content">
        <p>{description}</p>
        <p>
          $
          {cost}
        </p>
        {/* Onclick will handle delete function */}
        <button onClick={() => handleDelete(id)} type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
