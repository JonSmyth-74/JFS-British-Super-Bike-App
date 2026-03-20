import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-flag">🏁</span>
        <span className="brand-text">Jon's British Super-bikes 2026</span>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/race-meets" className={({ isActive }) => isActive ? 'active' : ''}>
            Race Meets
          </NavLink>
        </li>
        <li>
          <NavLink to="/riders" className={({ isActive }) => isActive ? 'active' : ''}>
            Riders
          </NavLink>
        </li>
        <li>
          <NavLink to="/league-table" className={({ isActive }) => isActive ? 'active' : ''}>
            League Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
