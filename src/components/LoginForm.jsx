import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginApi, fetchCurrentUser } from '../redux/authActions';
import { setReservationUserId } from '../redux/addReservationSlice';
import { useAuth } from '../auth/AuthProvider';
import '../styles/Forms.css';

function LoginForm() {
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
    <div className="form-container">
      <h2>Login</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
