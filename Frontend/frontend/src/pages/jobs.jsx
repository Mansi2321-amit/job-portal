function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Java Developer",
      company: "TCS",
      location: "Indore",
      logo: "https://logo.clearbit.com/tcs.com"
    },
    {
      id: 2,
      title: "React Developer",
      company: "Infosys",
      location: "Bangalore",
      logo: "https://logo.clearbit.com/infosys.com"
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "HCL",
      location: "Pune",
      logo: "https://logo.clearbit.com/hcltech.com"
    }
  ];

  return (
    <div className="container jobs-page">

      <h2 className="page-title">Latest Jobs</h2>

      <div className="jobs-grid">

        {jobs.map(job => (
          <div className="job-card" key={job.id}>

            <div className="job-header">
              <img
                src={job.logo}
                alt={job.company}
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/50")
                }
              />

              <div>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
              </div>
            </div>

            <p className="location">{job.location}</p>

            <button className="apply-btn">Apply Now</button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Jobs;