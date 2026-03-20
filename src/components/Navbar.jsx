import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__flag">🏁</span>
        <div className="navbar__title-block">
          <span className="navbar__title">Jon's British Super-bikes</span>
          <span className="navbar__season">2026 Season</span>
        </div>
      </div>
      <nav className="navbar__links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/race-meets" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Race Meets
        </NavLink>
        <NavLink to="/riders" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Riders
        </NavLink>
        <NavLink to="/league-table" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          League Table
        </NavLink>
      </nav>
    </header>
  );
}
