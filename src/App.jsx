import { useState } from "react";
import "./App.css";
import companiesJson from './companies.json'
import techJson from './technologies.json'
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Routes, Route } from 'react-router-dom'

function App() {
  const [companiesData, setCompaniesData] = useState(companiesJson)
  const [techData, setTechData] = useState(techJson)

 

  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <Routes>
          <Route path='/' element={ <HomePage companies={companiesData}/> } ></Route>
          <Route path='/company/:companySlug' element={ <CompanyPage companies={companiesData}/> } ></Route>
          <Route path='/tech/:slug' element={ <TechnologyPage techs={techData}/> } ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
