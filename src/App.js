import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/Navbar.scss';
import Reservations from './components/Reservations';
import Navbar from './components/navbar';
import Home from './components/home';
import DeleteRooms from './components/DeleteRooms';
import AddReservation from './components/AddReservation';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/addReservation" element={<AddReservation />} />
        <Route path="/deleteRooms" element={<DeleteRooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
