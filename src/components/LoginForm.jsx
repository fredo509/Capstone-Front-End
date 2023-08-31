import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginApi } from '../redux/authActions';
import { useAuth } from '../auth/AuthProvider';
import '../styles/Forms.css';

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginApi(email, password));
    login();
    navigate('/');
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
