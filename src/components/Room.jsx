import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchRoomsDetails } from '../redux/roomsSlice';
import '../styles/Room.scss';

const Room = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { roomsInfo } = useSelector((state) => state.rooms);

  const onHandleReserve = () => {
    navigate('/addReservation');
  };

  const onNavigateBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchRoomsDetails(id));
  }, [dispatch, id]);

  return (
    <section className="room-content-container">
      <h2 className="room-title">
        {roomsInfo.name}
      </h2>
      <div className="room-details">
        <div className="room-img-container">
          <img src={roomsInfo.photo} alt={roomsInfo.name} className="room-img" />
        </div>
        <p>{roomsInfo.description}</p>
        <p>
          Price:
          {roomsInfo.cost}
          $
        </p>
        <div className="btn-container">
          <button onClick={onNavigateBack} type="button">Back</button>
          <button onClick={onHandleReserve} type="button">Reserve</button>
        </div>
      </div>
    </section>
  );
};

export default Room;
