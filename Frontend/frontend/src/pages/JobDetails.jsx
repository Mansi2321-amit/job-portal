import { useLocation, useNavigate } from "react-router-dom";
import "../styles/jobdetails.css";

function JobDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const job = location.state;

  // ✅ SAFE fallback (prevents blank screen)
  if (!job) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Job data not found</h2>
        <p>Please go back and select a job again.</p>

        <button onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  const logo = `https://ui-avatars.com/api/?name=${job.company}&background=0a66c2&color=fff&size=80`;

  return (
    <div className="job-details">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-card">

        <img src={logo} alt="company" />

        <h2>{job.title}</h2>
        <h4>{job.company}</h4>

        <div className="meta">
          <span>📍 {job.location}</span>
          <span>💼 {job.type}</span>
          <span>⏳ {job.experience}</span>
        </div>

        <p className="desc-full">{job.description}</p>

        <button className="apply-main">Apply Now</button>

      </div>
    </div>
  );
}

export default JobDetails;