import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginApi, fetchCurrentUser } from '../redux/authActions';
import { setReservationUserId } from '../redux/addReservationSlice';
import { useAuth } from '../auth/AuthProvider';
import '../styles/Forms.scss';
import '../styles/Home.scss';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginApi(email, password));
      await dispatch(fetchCurrentUser());
      login();
      navigate('/');
      dispatch(setReservationUserId(localStorage.getItem('userId')));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="login-container">
        <h2 className="form-title">Login</h2>
        <div className="form-container">
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              className="input-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-login"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleLogin}>Login</button>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
