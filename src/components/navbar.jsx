import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const counter = 0;
  return (
    <ul>
      <li><NavLink to="/">Rooms</NavLink></li>
      <li>{counter}</li>
    </ul>
  );
};

export default Navbar;
