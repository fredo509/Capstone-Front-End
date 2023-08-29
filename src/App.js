import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/Navbar.scss';
import Reservations from './components/Reservations';
import Navbar from './components/navbar';
import Home from './components/home';
import Rooms from './components/RoomList';
import DeleteRooms from './components/DeleteRooms';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/deleteRooms" element={<DeleteRooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
