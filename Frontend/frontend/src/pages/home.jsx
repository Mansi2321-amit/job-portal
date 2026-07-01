import { useEffect, useState } from "react";
import JobCard from "../Components/JobCard";
import Hero from "../Components/Hero";

import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaBuilding,
  FaBookmark,
  FaBell,
  FaFileAlt,
  FaFire,
  FaReact,
  FaJava
} from "react-icons/fa";

function Home({ search }) {

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [filters, setFilters] = useState({
    location: "",
    type: "",
    experience: "",
  });

  const [savedJobs, setSavedJobs] = useState([]);

  // ✅ NEW: Apply modal state
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const data = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,

  title: [
    "Java Developer",
    "React Developer",
    "Full Stack Engineer",
    "Backend Engineer",
    "Frontend Developer",
    "Software Engineer",
    "Spring Boot Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Angular Developer"
  ][i % 10],

  company: [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Amazon",
    "Google",
    "Microsoft",
    "IBM",
    "Capgemini",
    "Cognizant"
  ][i % 10],

  location: [
    "Delhi",
    "Bangalore",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Noida",
    "Chennai",
    "Indore",
    "Gurgaon",
    "Remote"
  ][i % 10],

  type: [
    "Full Time",
    "Remote",
    "Hybrid"
  ][i % 3],

  experience: [
    "0-2 Yrs",
    "1-3 Yrs",
    "2-5 Yrs",
    "3-6 Yrs",
    "5+ Yrs"
  ][i % 5],

  salary: [
    "₹4-7 LPA",
    "₹6-10 LPA",
    "₹8-12 LPA",
    "₹10-18 LPA",
    "₹15-25 LPA"
  ][i % 5],

  posted: [
    "Today",
    "1 Day Ago",
    "2 Days Ago",
    "5 Days Ago",
    "1 Week Ago"
  ][i % 5],

  applicants: [
    12,
    37,
    58,
    126,
    243
  ][i % 5],

  rating: [
    4.1,
    4.3,
    4.5,
    4.7,
    4.8
  ][i % 5],

  logo: `https://ui-avatars.com/api/?background=random&name=${
    [
      "TCS",
      "Infosys",
      "Wipro",
      "Accenture",
      "Amazon",
      "Google",
      "Microsoft",
      "IBM",
      "Capgemini",
      "Cognizant"
    ][i % 10]
  }`,

  description:
    "Spring Boot + React enterprise application development with REST APIs, Microservices and SQL."
  }));

  // IMPORTANT - don't forget these
  setJobs(data);
  setFilteredJobs(data);

}, []);

  const applyFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleSaveJob = (job) => {
    setSavedJobs((prev) => {
      const exists = prev.find((j) => j.id === job.id);
      if (exists) return prev.filter((j) => j.id !== job.id);
      return [...prev, job];
    });
  };

  useEffect(() => {
    let result = [...jobs];

    if (search) {
      result = result.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filters.location) {
      result = result.filter(job => job.location === filters.location);
    }

    if (filters.type) {
      result = result.filter(job => job.type === filters.type);
    }

    if (filters.experience) {
      result = result.filter(job => job.experience === filters.experience);
    }

    setFilteredJobs(result);
  }, [search, jobs, filters]);

  return (
    <div className="page-layout">

      {/* LEFT SIDEBAR */}
      <aside className="sidebar left">

        <div className="sidebar-section">
          <h3>🔍 Filters</h3>

          <div className="sidebar-item" onClick={() => applyFilter("location", "Delhi")}>
            <FaMapMarkerAlt />
            <span>Delhi</span>
          </div>

          <div className="sidebar-item" onClick={() => applyFilter("location", "Bangalore")}>
            <FaMapMarkerAlt />
            <span>Bangalore</span>
          </div>

          <div className="sidebar-item" onClick={() => applyFilter("location", "")}>
            <span>❌ Clear Location</span>
          </div>

          <div className="sidebar-item" onClick={() => applyFilter("type", "Full Time")}>
            <FaBriefcase />
            <span>Full Time</span>
          </div>

          <div className="sidebar-item" onClick={() => applyFilter("type", "Remote")}>
            <FaBriefcase />
            <span>Remote</span>
          </div>

          <div className="sidebar-item" onClick={() => applyFilter("type", "")}>
            <span>❌ Clear Type</span>
          </div>

        </div>

        <hr />

        <div className="sidebar-section">
          <h3>⚡ Quick Access</h3>

          <div className="sidebar-item">
            <FaBookmark />
            <span>Saved Jobs ({savedJobs.length})</span>
          </div>

          <div className="sidebar-item">
            <FaFileAlt />
            <span>Applied Jobs</span>
          </div>

          <div className="sidebar-item">
            <FaBell />
            <span>Job Alerts</span>
          </div>
        </div>

      </aside>

      {/* CENTER */}
      <main className="feed">
              <Hero />
        <div className="feed-header">
          <h2>🔥 Recommended Jobs</h2>
          <p>{filteredJobs.length} jobs found</p>
        </div>

        <div className="job-grid">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onSave={toggleSaveJob}
              isSaved={savedJobs.some((j) => j.id === job.id)}
              onApply={(job) => setSelectedJob(job)}   // ✅ NEW
            />
          ))}
        </div>

      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="sidebar right">

        <div className="sidebar-section">
          <h3>🔥 Trending</h3>

          <div className="sidebar-item">
            <FaFire />
            <span>Java Developer Jobs</span>
          </div>

          <div className="sidebar-item">
            <FaReact />
            <span>React Demand High</span>
          </div>

          <div className="sidebar-item">
            <FaJava />
            <span>Spring Boot Roles</span>
          </div>
        </div>

      </aside>

      {/* ================= APPLY MODAL (NEW) ================= */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>

          <div className="modal" onClick={(e) => e.stopPropagation()}>

            <h2>Apply for {selectedJob.title}</h2>
            <p className="company">{selectedJob.company}</p>

            <form className="apply-form">

              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />

              <textarea placeholder="Why are you a good fit?" />

              <button type="submit">Submit Application</button>

            </form>

            <button
              className="close-btn"
              onClick={() => setSelectedJob(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Home;