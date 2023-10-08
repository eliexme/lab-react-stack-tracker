import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

function CompanyPage({companies}) {
const { companySlug } = useParams()

  return (
    <div>
      {companies.filter((company)=> company.slug === companySlug)
      .map((selectedCompany)=>(
        <div key={selectedCompany.id}>
          <img src={selectedCompany.logo} alt="" />
          <h1>{selectedCompany.name}</h1>
          <a href={`http://${selectedCompany.website}`} target="_blank" rel="noopener noreferrer">{selectedCompany.website}</a>
          <p>{selectedCompany.description}</p>

          <div className='allTech'>
            {selectedCompany.techStack.map((eachTech)=>(
              <div className='techCard' key={eachTech.slug}>
                <Link to={`/tech/${eachTech.slug}?from=${selectedCompany.slug}`}>
                  <h5>{eachTech.name}</h5>
                  <img className='techLogo' src={eachTech.image} alt="" />
                </Link>
                
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default CompanyPage;
