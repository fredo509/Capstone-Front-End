import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteRoom, deleteRoomReducer, selectedRoom } from '../redux/roomsSlice';

const Card = ({
  id, name, photo, description, cost,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleSelect = (id) => {
    dispatch(selectedRoom(id));
    navigate(`/rooms/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteRoom(id));
    dispatch(deleteRoomReducer(id));
  };

  return (
    <div className="display-card-container">
      <h2 className="display-card-title">{name}</h2>
      <div className="card-img-container">
        <img className="embla__slide__img" src={photo} alt="Your alt text" />
      </div>
      <div className="card-content">
        <p>{description}</p>
        <p>
          $
          {cost}
        </p>
        {/* Onclick will handle delete function */}
        <button onClick={() => handleDelete(id)} type="button" className="delete-btn">
          Delete
        </button>
        <button onClick={() => onHandleSelect(id)} type="button" className="select-btn">
          See Details
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
