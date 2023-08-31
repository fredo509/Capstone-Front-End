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

  // Navigate to reservation Item
  // const onHandleReserve = (id) => {
  //   navigate(`/reserveRoom/${id}`)
  // }

  const onNavigateBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchRoomsDetails(id));
  }, [dispatch, id]);

  return (
    <section className="room-content-container">
      <div className="room-img-container">
        <img src={roomsInfo.photo} alt={roomsInfo.name} className="room-img" />
      </div>
      <div className="room-details">
        <h2 className="room-title">
          {roomsInfo.name}
        </h2>
        <p>{roomsInfo.description}</p>
        <p>
          Price:
          {roomsInfo.cost}
          $
        </p>
        <button onClick={onNavigateBack} type="button">Back</button>
      </div>
    </section>
  );
};

export default Room;
