import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/hotelLogo.png';
import { logoutApi } from '../redux/authActions'; // Import the logout action
import { useAuth } from '../auth/AuthProvider';

const Navbar = () => {
  const token = localStorage.getItem('tokenKey');
  const role = localStorage.getItem('userRole');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    dispatch(logoutApi());
    logout();
    navigate('/');
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navLogo" />
      <ul className="navItems">
        <li className="navItem">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        {token && (
          <>
            <li className="navItem">
              <NavLink to="/addReservation" activeClassName="active">Make a reservation</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/reservations" activeClassName="active">My Reservations</NavLink>
            </li>
            {role === 'admin' && (
              <>
                <li className="navItem">
                  <NavLink to="/deleteRooms" activeClassName="active">Delete Rooms</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/addRooms" activeClassName="active">Add Rooms</NavLink>
                </li>
              </>
            )}
          </>
        )}
        {token ? (
          <>
            <li className="navItem">
              <button type="button" onClick={handleLogout} className="logout-btn">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="navItem">
              <NavLink to="/loginForm" activeClassName="active">Log In</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/signupForm" activeClassName="active">SignUp</NavLink>
            </li>
          </>
        )}
      </ul>
      <div className="navIcons">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
};

export default Navbar;
