import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaFileUpload,
  FaEdit
} from "react-icons/fa";

import "../styles/profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        {/* Header */}

        <div className="profile-header">

          <FaUserCircle className="profile-avatar" />

          <div>

            <h2>Mansi Thakur</h2>

            <p>Java Full Stack Developer</p>

            <button className="edit-btn">
              <FaEdit /> Edit Profile
            </button>

          </div>

        </div>

        {/* Personal Information */}

        <div className="profile-section">

          <h3>Personal Information</h3>

          <div className="info-grid">

            <p><FaEnvelope /> mansi@example.com</p>

            <p><FaPhone /> +91 9876543210</p>

            <p><FaMapMarkerAlt /> Indore, Madhya Pradesh</p>

            <p><FaGraduationCap /> B.Tech - Computer Science</p>

          </div>

        </div>

        {/* Skills */}

        <div className="profile-section">

          <h3>
            <FaCode /> Skills
          </h3>

          <div className="skills">

            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
            <span>REST API</span>
            <span>Hibernate</span>
            <span>Git</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>

          </div>

        </div>

        {/* Experience */}

        <div className="profile-section">

          <h3>
            <FaBriefcase /> Experience
          </h3>

          <div className="experience-card">

            <h4>Java Full Stack Developer</h4>

            <p>
              Spring Boot | React | REST APIs | SQL | Microservices
            </p>

          </div>

        </div>

        {/* Resume */}

        <div className="profile-section">

          <h3>Resume</h3>

          <button className="resume-btn">

            <FaFileUpload />

            Upload Resume

          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;