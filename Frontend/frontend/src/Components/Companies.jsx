import "../styles/company.css";

const companies = [
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/TCS_New_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "HCLTech", logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/HCLTech-new-logo.svg" }
];

function Companies() {
  return (
    <section className="companies-section">
      <div className="container">
        <h2 className="section-title">🏢 Top Companies</h2>

        <div className="company-grid">
          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <img src={company.logo} alt={company.name} />
              <h5>{company.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;