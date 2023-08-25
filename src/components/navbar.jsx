import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <ul className="navbar">
    <li>
      <NavLink to="/">Rooms</NavLink>
    </li>
    <li>
      <NavLink to="/Reservations">My Reservations</NavLink>
    </li>
    <li>
      <NavLink to="/">Rooms</NavLink>
    </li>
    <li>
      <NavLink to="/">Rooms</NavLink>
    </li>
    <li>
      <NavLink to="/">Rooms</NavLink>
    </li>
  </ul>
);

export default Navbar;
