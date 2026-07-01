import "../styles/featured.css";
import jobs from "../data/jobs";
import JobCard from "./JobCard";

function FeaturedJobs() {
  return (
    <section className="featured-section">
      <div className="container">

        <h2 className="section-title">
          🔥 Featured Jobs
        </h2>

        <div className="job-grid">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedJobs;