import { Link } from 'react-router-dom'

function HomePage({companies}) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className='allCompanies'>
        {companies.map((company)=>(
          <div className='companyCard' key={company.id}>
              <Link to={`/company/${company.slug}`}>
                <h3>{company.name}</h3>
                <img className='companyLogo' src={company.logo} alt="" />
              </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default HomePage;
