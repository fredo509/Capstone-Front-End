import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/authActions';
import '../styles/Forms.scss';

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    dispatch(signup({ name, email, password }));
    navigate('/loginForm');
  };

  return (
    <>
      <section className="login-container">
        <h2 className="form-title">Sign Up</h2>
        <div className="form-container">
          <div className="input-container">
            <input
              type="text"
              placeholder="Name"
              className="input-login"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
          <button onClick={handleSignup} type="button">Sign Up</button>
        </div>
      </section>
    </>
  );
};

export default SignupForm;
