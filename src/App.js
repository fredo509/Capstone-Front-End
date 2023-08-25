import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Reservations from './components/Reservations.jsx';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
