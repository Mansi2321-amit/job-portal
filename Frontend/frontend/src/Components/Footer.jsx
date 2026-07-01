import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-column">
          <h2 className="footer-logo">JobPortal</h2>

          <p>
            Find your dream job with India's leading professional
            job portal connecting talented people with top companies.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/jobs">Jobs</a>
          <a href="/companies">Companies</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>

        </div>

        {/* Job Categories */}

        <div className="footer-column">

          <h3>Popular Categories</h3>

          <a href="/">Java Developer</a>
          <a href="/">React Developer</a>
          <a href="/">Spring Boot</a>
          <a href="/">Full Stack</a>
          <a href="/">Cloud Engineer</a>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <FaEnvelope /> support@jobportal.com
          </p>

          <p>
            <FaPhone /> +91 9876543210
          </p>

          <p>
            <FaMapMarkerAlt /> Indore, India
          </p>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        © 2026 JobPortal. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;