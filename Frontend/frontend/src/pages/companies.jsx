import "../styles/companies.css";

const companies = [
  { name: "TCS", jobs: 145, rating: "4.2", logo: "https://ui-avatars.com/api/?name=TCS&background=0A66C2&color=fff" },
  { name: "Infosys", jobs: 98, rating: "4.1", logo: "https://ui-avatars.com/api/?name=Infosys&background=007ACC&color=fff" },
  { name: "Wipro", jobs: 72, rating: "4.0", logo: "https://ui-avatars.com/api/?name=Wipro&background=8E44AD&color=fff" },
  { name: "Accenture", jobs: 120, rating: "4.4", logo: "https://ui-avatars.com/api/?name=Accenture&background=6C2BD9&color=fff" },
  { name: "Amazon", jobs: 85, rating: "4.6", logo: "https://ui-avatars.com/api/?name=Amazon&background=FF9900&color=fff" },
  { name: "Google", jobs: 56, rating: "4.8", logo: "https://ui-avatars.com/api/?name=Google&background=4285F4&color=fff" },
  { name: "Microsoft", jobs: 63, rating: "4.7", logo: "https://ui-avatars.com/api/?name=Microsoft&background=00A4EF&color=fff" },
  { name: "IBM", jobs: 44, rating: "4.3", logo: "https://ui-avatars.com/api/?name=IBM&background=052FAD&color=fff" }
];

function Companies() {
  return (
    <div className="companies-page">
      <h1>Top Hiring Companies</h1>

      <div className="company-grid">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>
            <img src={company.logo} alt={company.name} />
            <h3>{company.name}</h3>
            <p>⭐ {company.rating}</p>
            <p>{company.jobs} Open Jobs</p>
            <button>View Jobs</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;