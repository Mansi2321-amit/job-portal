import {
  FaBookmark,
  FaRegBookmark,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaUsers,
  FaStar,
  FaClock
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import "../styles/jobcard.css";

function JobCard({ job, onSave, isSaved, onApply }) {
  const navigate = useNavigate();

  // ✅ safe ID fallback
  const jobId = job.id || job.jobId || job._id;

  return (
    <div
      className="job-card"
      onClick={() => jobId && navigate(`/job/${jobId}`, { state: job })}
    >

      {/* Save Icon */}
      <button
        className={`bookmark-btn ${isSaved ? "saved" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onSave(job);
        }}
      >
        {isSaved ? <FaBookmark /> : <FaRegBookmark />}
      </button>

      {/* Header */}
      <div className="job-top">

        <img
          src={job.logo}
          alt={job.company}
        />

        <div className="job-header">

          <h3>{job.title}</h3>

          <p className="company">
            {job.company}
          </p>

        </div>

      </div>

      {/* Description */}
      <p className="desc">
        {job.description}
      </p>

      {/* Skills */}
      <div className="skills">

        <span>Spring Boot</span>
        <span>React</span>
        <span>REST API</span>
        <span>SQL</span>

      </div>

      {/* Job Meta */}
      <div className="meta">

        <span>
          <FaMapMarkerAlt />
          {job.location}
        </span>

        <span>
          <FaBriefcase />
          {job.type}
        </span>

        <span>
          <FaMoneyBillWave />
          {job.salary}
        </span>

      </div>

      {/* Extra */}
      <div className="extra">

        <span>
          <FaStar />
          {job.rating}
        </span>

        <span>
          <FaUsers />
          {job.applicants}
        </span>

        <span>
          <FaClock />
          {job.posted}
        </span>

      </div>

      {/* Apply */}
      <button
        className="apply-btn"
        onClick={(e) => {
          e.stopPropagation();
          onApply(job);
        }}
      >
        Easy Apply →
      </button>

    </div>
  );
}

export default JobCard;