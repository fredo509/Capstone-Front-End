import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { deleteRoom, deleteRoomReducer, selectedRoom } from '../redux/roomsSlice';
import '../styles/Card.scss';

const Card = ({
  id, name, photo, description, cost, showDeleteButton, showAddToReservationButton,
}) => {
  const [reservationState, setReservationState] = useState({
    reserved: false,
    roomIds: [],
    totalCost: 0,
    city: '',
  });

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

  const handleReserve = (roomId, roomCost, city) => {
    if (reservationState.roomIds.includes(roomId)) {
      const updatedRoomIds = reservationState.roomIds.filter((id) => id !== roomId);
      setReservationState((prevState) => ({
        ...prevState,
        roomIds: updatedRoomIds,
        totalCost: prevState.totalCost - parseFloat(roomCost),
      }));
    } else {
      setReservationState((prevState) => ({
        ...prevState,
        roomIds: [...prevState.roomIds, roomId],
        totalCost: prevState.totalCost + parseFloat(roomCost),
        city,
      }));
    }
    setReservationState((prevState) => ({
      ...prevState,
      reserved: !prevState.reserved,
    }));
    console.log('Reservation State:', reservationState);
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
          { showDeleteButton && (
          <button
            onClick={() => handleDelete(id)}
            type="button"
            className={`delete-btn ${showDeleteButton ? '' : 'hidden'}`}
          >
            Delete
          </button>
          )}
          <button
            onClick={() => onHandleSelect(id)}
            type="button"
            className="select-btn"
          >
            See Details
          </button>
          { showAddToReservationButton && (
          <button
            onClick={() => handleReserve(id, cost, 'New York')} // Replace 'New York' with the actual city
            type="button"
            className={`reserve-btn ${reservationState.reserved ? 'reserved' : ''}`}
          >
            {reservationState.reserved ? 'Reserved' : 'Reserve'}
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
