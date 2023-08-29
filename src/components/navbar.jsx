import { NavLink } from 'react-router-dom';
import logo from '../assets/hotelLogo.png';

const Navbar = () => (
  <div className="navbar">
    <img src={logo} alt="logo" className="navLogo" />
    <ul className="navItems">
      <li className="navItem active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="navItem">
        <NavLink to="/reservations">Make a reservation</NavLink>
      </li>
      <li className="navItem">
        <NavLink to="/rooms">My Reservations</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
