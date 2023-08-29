import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/hotelLogo.png';

const Navbar = () => (
  <div className="navbar">
    <img src={logo} alt="logo" className="navLogo" />
    <ul className="navItems">
      <li className="navItem">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
      </li>
      <li className="navItem">
        <NavLink to="/addReservation" activeClassName="active">Make a reservation</NavLink>
      </li>
      <li className="navItem">
        <NavLink to="/reservations" activeClassName="active">My Reservations</NavLink>
      </li>
      <li className="navItem">
        <NavLink to="/deleteRooms" activeClassName="active">Delete Rooms</NavLink>
      </li>
    </ul>
    <div className="navIcons">
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  </div>
);

export default Navbar;
