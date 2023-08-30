import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchRoomsDetails } from '../redux/roomsSlice';
import '../styles/Room.css';

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
      <h2 className="room-title">
        Take a look at
      </h2>
      <h2 className="room-title">
        {roomsInfo.name}
      </h2>
      <div>
        <div>
          <div className="room-img-container">
            <img src={roomsInfo.photo} alt={roomsInfo.name} className="room-img" />
          </div>
          <div className="room-content aling-center">
            <p>
              Price:
              {roomsInfo.cost}
              $
            </p>
            <p>{roomsInfo.description}</p>
            <div className="aling-center">
              <button onClick={onNavigateBack} type="button">Back</button>
              {/* <button onClick={onHandleReserve}>Reserve</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
