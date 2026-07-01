import { FaBriefcase, FaBuilding, FaUsers } from "react-icons/fa";
import "../styles/stats.css";

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">

        <div className="stat-card">
          <FaBriefcase className="stat-icon" />
          <h2>25K+</h2>
          <p>Jobs Available</p>
        </div>

        <div className="stat-card">
          <FaBuilding className="stat-icon" />
          <h2>1500+</h2>
          <p>Companies</p>
        </div>

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h2>50K+</h2>
          <p>Candidates</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;