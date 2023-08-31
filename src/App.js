/* import axios from 'axios';
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
import LoginForm from './components/LoginForm';

const token = localStorage.getItem('yourTokenKey'); // Retrieve the token from where you stored it

if (token) {
  axios.defaults.headers.common.authorization = `Bearer ${token}`;
  console.log(axios.defaults.headers.common.authorization);
}

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
          <Route path="/loginForm" element={<LoginForm />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
*/
import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import './styles/Navbar.scss';
// import Reservations from './components/Reservations';
import Navbar from './components/navbar';
import Home from './components/home';
// import DeleteRooms from './components/DeleteRooms';
import AddReservation from './components/AddReservation';
// import Room from './components/Room';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('tokenKey');
    if (token) {
      axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }
  }, []);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <PrivateRoute path="rooms/:id" element={<Room />} /> */}
          {/* <PrivateRoute path="/reservations" element={<Reservations />} /> */}
          <Route
            path="/addReservation"
            element={
              (
                <PrivateRoute>
                  <AddReservation />
                </PrivateRoute>
              )
            }
          />
          {/* <PrivateRoute path="/deleteRooms" element={<DeleteRooms />} /> */}
          <Route path="/loginForm" element={<LoginForm />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
