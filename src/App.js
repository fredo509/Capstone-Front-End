import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Reservations from './components/Reservations';
import Navbar from './components/navbar';
import Home from './components/Home.jsx';

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
