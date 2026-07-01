import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaGithub,
  FaBriefcase
} from "react-icons/fa";
import api from "../services/api";
import "../styles/login.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const response = await api.post("/auth/login", formData);

      localStorage.setItem("token", response.data);

      alert("Login Successful");

      navigate("/");

    } catch (err) {

      alert("Invalid Username or Password");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="login-page">

      {/* LEFT SIDE */}

      <div className="login-left">

        <div className="overlay">

          <h1>Find Your Dream Job</h1>

          <p>
            Connect with thousands of companies hiring Java,
            React, Spring Boot and Full Stack Developers.
          </p>

          <div className="stats">

            <div className="stat-card">
              <h2>50K+</h2>
              <span>Jobs</span>
            </div>

            <div className="stat-card">
              <h2>1000+</h2>
              <span>Companies</span>
            </div>

            <div className="stat-card">
              <h2>20K+</h2>
              <span>Candidates</span>
            </div>

          </div>

          <div className="floating-card">

            <FaBriefcase />

            <div>

              <h3>Java Developer</h3>

              <p>Google • Bangalore</p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back 👋</h2>

          <p>Login to continue your career journey</p>

          <form onSubmit={handleLogin}>

            <div className="input-box">

              <FaUser />

              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-box">

              <FaLock />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

            <div className="login-options">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <a href="/">Forgot Password?</a>

            </div>

            <button
              className="login-btn"
              type="submit"
            >
              {loading ? "Signing In..." : "Login"}
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="social-btn">
            <FaGoogle />
            Continue with Google
          </button>

          <button className="social-btn">
            <FaGithub />
            Continue with GitHub
          </button>

          <p className="register-text">

            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}

export default Login;