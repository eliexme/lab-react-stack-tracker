import { useEffect } from 'react'
import {useParams, Link, useSearchParams, useNavigate} from 'react-router-dom'

function TechnologyPage({techs}) {
  const { slug } = useParams()
  const [searchParams, setSeachParams] = useSearchParams()
  const navigate = useNavigate()

  //console.log(searchParams.get('from')) coming from previous link in companyPage


  const handleClick = ()=>{
    navigate(`/company/${searchParams.get('from')}`)
  }

  return (
    <div>
      <h1>Technology Details</h1>

      {techs.filter((eachTech)=> eachTech.slug === slug)
      .map((selectedTech)=>(
        <div key={selectedTech.id}>
          <img src={selectedTech.image} alt="" />
          <h1>{selectedTech.name}</h1>
          <p>{selectedTech.description}</p>
          <button type='button' onClick={handleClick}>
            Back
          </button>
        </div>
      ))}
    </div>
  );
}

export default TechnologyPage;
