import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaUserShield } from "react-icons/fa";
import api from "../services/api";
import "../styles/register.css";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "CANDIDATE"   // ✅ FIXED DEFAULT ROLE
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/auth/register", formData);

      alert("Registration Successful!");
      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      {/* LEFT SIDE */}
      <div className="register-left">
        <div className="overlay">
          <h1>Start Your Career Journey</h1>

          <p>
            Join thousands of professionals and discover exciting opportunities from top companies.
          </p>

          <div className="feature-card">
            <h3>🚀 Why Join?</h3>
            <ul>
              <li>✔ 50,000+ Jobs</li>
              <li>✔ Top MNC Companies</li>
              <li>✔ Instant Apply</li>
              <li>✔ Save Favourite Jobs</li>
              <li>✔ Personalized Dashboard</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="register-right">

        <div className="register-card">

          <h2>Create Account</h2>
          <p>Register and start applying today</p>

          <form onSubmit={handleRegister}>

            {/* USERNAME */}
            <div className="input-box">
              <FaUser />
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="input-box">
              <FaLock />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* ROLE SELECTION */}
            <div className="input-box">
              <FaUserShield />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="CANDIDATE">Job Seeker</option>
                <option value="RECRUITER">Recruiter</option>
                <option value="ADMIN">Admin</option>
              </select>

            </div>

            {/* SUBMIT BUTTON */}
            <button className="register-btn" type="submit">
              {loading ? "Creating Account..." : "Register"}
            </button>

          </form>

          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;