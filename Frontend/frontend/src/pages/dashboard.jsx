function Dashboard() {
  const appliedJobs = [
    { id: 1, title: "Java Developer" },
    { id: 2, title: "React Developer" }
  ];

  return (
    <div className="container mt-4">

      <h2>Dashboard</h2>

      <div className="card p-3 mt-3">
        <h5>Applied Jobs</h5>

        <ul>
          {appliedJobs.map(job => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Dashboard;