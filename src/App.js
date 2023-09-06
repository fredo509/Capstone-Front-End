import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './auth/AuthProvider';
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
import PrivateRoute from './components/PrivateRoute';
import SignupForm from './components/SignupForm';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('tokenKey');
    if (token) {
      axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }
  }, []);
  return (
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="rooms/:id"
              element={
                (
                  <PrivateRoute>
                    <Room />
                  </PrivateRoute>
                )
              }
            />
            <Route
              path="/reservations"
              element={
                (
                  <PrivateRoute>
                    <Reservations />
                  </PrivateRoute>
                )
              }
            />
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
            <Route
              path="/deleteRooms"
              element={
                (
                  <PrivateRoute>
                    <DeleteRooms />
                  </PrivateRoute>
                )
              }
            />
            <Route path="/loginForm" element={<LoginForm />} />
            <Route path="/signupForm" element={<SignupForm />} />
          </Routes>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
