import {
  FaSearch,
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaArrowRight
} from "react-icons/fa";

import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          🚀 India's Fastest Growing Job Portal
        </span>

        <h1>
          Find Your <span>Dream Job</span>
          <br />
          with Top Companies
        </h1>

        <p>
          Search thousands of verified openings from India's leading
          IT companies including TCS, Infosys, Accenture,
          Amazon, Microsoft and more.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            <FaSearch />
            Find Jobs
          </button>

          <button className="secondary-btn">
            Explore Companies
            <FaArrowRight />
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <div className="stat">
            <FaBriefcase />
            <div>
              <h2>50K+</h2>
              <p>Jobs</p>
            </div>
          </div>

          <div className="stat">
            <FaBuilding />
            <div>
              <h2>1200+</h2>
              <p>Companies</p>
            </div>
          </div>

          <div className="stat">
            <FaUsers />
            <div>
              <h2>2M+</h2>
              <p>Applicants</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;