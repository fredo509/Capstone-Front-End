import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { deleteRoom, deleteRoomReducer, selectedRoom } from '../redux/roomsSlice';
import '../styles/Card.scss';

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
      <div className="card-img-container">
        <img className="card_img" src={photo} alt="Your alt text" />
      </div>
      <h2 className="display-card-title">{name}</h2>
      <div className="card-separator">
        <p>••••••••••••••••••••</p>
      </div>
      <div className="card-content">
        <p>{description}</p>
        <div className="card-actions">
          <p>
            $
            {cost}
            /night
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
      <div className="card-links">
        <FontAwesomeIcon icon={faTwitter} className="card-icon-sm" />
        <FontAwesomeIcon icon={faFacebookF} className="card-icon-sm" />
        <FontAwesomeIcon icon={faInstagram} className="card-icon-sm" />
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
