import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        JobPortal
      </div>

      {/* Search */}
      <div className="nav-search">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search jobs, companies..."
        />
      </div>

      {/* Right */}
      <div className="nav-right">

        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/jobs" className="nav-link">
          Jobs
        </NavLink>

        <NavLink to="/companies" className="nav-link">
          Companies
        </NavLink>

        <div className="icon-btn">
          <FaBell />
          <span className="badge">3</span>
        </div>

        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>

        <NavLink to="/register" className="register-btn">
          Register
        </NavLink>

        <div className="profile">
          <FaUserCircle className="profile-icon" />

          <div className="dropdown">
            <Link to="/profile" className="dropdown-link">
  My Profile
</Link>
            <p>Saved Jobs</p>
            <p>Applications</p>
            <p>Logout</p>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Navbar;