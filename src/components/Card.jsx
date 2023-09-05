import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { addRoomId, updateTotal, setReservationCity } from '../redux/addReservationSlice';
import { deleteRoom, deleteRoomReducer, selectedRoom } from '../redux/roomsSlice';
import '../styles/Card.scss';

const Card = ({
  id, name, photo, description, cost, showDeleteButton, showAddToReservationButton,
  roomCity,
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

  const [isAdded, setIsAdded] = useState(false);

  /* eslint-disable camelcase */
  const addRoomIdAndCost = (roomId, roomCost, roomCity) => (dispatch, getState) => {
    const state = getState();
    const { room_ids, total_cost } = state.pendingReservation.reservation;

    // Check if roomId is already in room_ids
    if (room_ids.includes(roomId)) {
      // Room is already selected, subtract its cost
      const newTotalCost = total_cost - parseFloat(roomCost);

      dispatch(addRoomId(roomId));
      dispatch(updateTotal(newTotalCost));
      setIsAdded(false);
    } else {
      // Room is not selected, add its cost
      // Check if city is already set, if not add it
      dispatch(setReservationCity(roomCity));

      const newTotalCost = total_cost + parseFloat(roomCost);
      dispatch(addRoomId(roomId));
      dispatch(updateTotal(newTotalCost));
      setIsAdded(true);
    }

    console.log(room_ids);
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
            onClick={() => {
              dispatch(addRoomIdAndCost(id, cost, roomCity));
            }}
            type="button"
            className="select-btn"
          >
            {isAdded ? 'Remove' : 'Add'}
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
  roomCity: PropTypes.string,
};

Card.defaultProps = {
  showDeleteButton: false, // Set a default value for showDeleteButton
  showAddToReservationButton: false,
  roomCity: 'New York',
};

export default Card;
