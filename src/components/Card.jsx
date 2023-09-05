import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { addRoomId, updateTotal } from '../redux/addReservationSlice';
import { deleteRoom, deleteRoomReducer, selectedRoom } from '../redux/roomsSlice';
import '../styles/Card.scss';

const Card = ({
  id, name, photo, description, cost, showDeleteButton, showAddToReservationButton,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservationState = 'reserve';

  const onHandleSelect = (id) => {
    dispatch(selectedRoom(id));
    navigate(`/rooms/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteRoom(id));
    dispatch(deleteRoomReducer(id));
  };

  const addRoomIdAndCost = (roomId, roomCost) => (dispatch, getState) => {
    // Dispatch an action to add the room ID to the array
    dispatch(addRoomId(roomId));

    // Calculate the new total cost
    const state = getState();
    const { totalCost } = state.pendingReservation.reservation;
    const newTotalCost = totalCost + parseFloat(roomCost);

    // Dispatch an action to update the total cost
    dispatch(updateTotal(newTotalCost));
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
          <button
            onClick={() => onHandleSelect(id)}
            type="button"
            className="select-btn"
          >
            See Details
          </button>
          { showAddToReservationButton && (
          <button
            onClick={() => dispatch(addRoomIdAndCost(id, cost))}
            type="button"
            className="reserve-btn"
          >
            {reservationState === 'reserved' ? 'Reserved' : 'Reserve'}
          </button>
          )}
          { showDeleteButton && (
          <button
            onClick={() => dispatch(handleDelete(id))}
            type="button"
            className={`delete-btn ${showDeleteButton ? '' : 'hidden'}`}
          >
            Delete
          </button>
          )}
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
  showDeleteButton: PropTypes.bool, // Define the prop type
  showAddToReservationButton: PropTypes.bool,
};

Card.defaultProps = {
  showDeleteButton: false, // Set a default value for showDeleteButton
  showAddToReservationButton: false,
};

export default Card;
