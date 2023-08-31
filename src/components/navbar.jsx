// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import logo from '../assets/hotelLogo.png';

// const Navbar = () => (
//   <div className="navbar">
//     <img src={logo} alt="logo" className="navLogo" />
//     <ul className="navItems">
//       <li className="navItem">
//         <NavLink exact to="/" activeClassName="active">Home</NavLink>
//       </li>
//       <li className="navItem">
//         <NavLink to="/addReservation" activeClassName="active">Make a reservation</NavLink>
//       </li>
//       <li className="navItem">
//         <NavLink to="/reservations" activeClassName="active">My Reservations</NavLink>
//       </li>
//       <li className="navItem">
//         <NavLink to="/deleteRooms" activeClassName="active">Delete Rooms</NavLink>
//       </li>
//       <li className="navItem">
//         <NavLink to="/loginForm" activeClassName="active">Log In</NavLink>
//       </li>
//     </ul>
//     <div className="navIcons">
//       <FontAwesomeIcon icon={faTwitter} />
//       <FontAwesomeIcon icon={faFacebookF} />
//       <FontAwesomeIcon icon={faInstagram} />
//     </div>
//   </div>
// );

// export default Navbar;

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/hotelLogo.png';
import { logout } from '../redux/authActions'; // Import the logout action

const Navbar = () => {
  const token = useSelector((state) => state.authorization.token);
  const dispatch = useDispatch(); // Get the dispatch function
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/'); // Redirect to the home page after logout
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
            <li className="navItem">
              <NavLink to="/deleteRooms" activeClassName="active">Delete Rooms</NavLink>
            </li>
          </>
        )}
        {token ? (
          <>
            <li className="navItem">
              <button type="button" onClick={handleLogout}>Logout</button>
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
