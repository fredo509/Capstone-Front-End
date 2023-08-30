import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import './styles/Navbar.scss';
import Reservations from './components/Reservations';
import Navbar from './components/navbar';
import Home from './components/home';
import DeleteRooms from './components/DeleteRooms';
import AddReservation from './components/AddReservation';
import Room from './components/Room';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rooms/:id" element={<Room />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/addReservation" element={<AddReservation />} />
          <Route path="/deleteRooms" element={<DeleteRooms />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
