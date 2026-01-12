import React from 'react'
import '../css/Hero.css' 
import logo1 from '../assets/logo_accenture.png'
import logo2 from '../assets/logo_amdocs.png'
import logo3 from '../assets/logo_cognizant.svg'
import logo4 from '../assets/logo_deloitte.png'
import logo5 from '../assets/logo_deshaw.png'
import logo6 from '../assets/logo_elasticrun.png'
import logo7 from '../assets/logo_ibm.png'
import logo8 from '../assets/logo_juspay.png'
import logo9 from '../assets/logo_ogilvy.png'  
import logo10 from '../assets/logo_paytm.png'
import logo11 from '../assets/logo_plm.png'
import logo12 from '../assets/logo_tata.png'

const Companyplacement = () => {
  return (
    <div>
         <section className="companies-section">
              <h2 className="companies-title">Top IT Recruiters</h2>
              <div className="companies-grid">
                <div className="company-card"><img src={logo1} alt="Accenture" /><span>Accenture</span></div>
                <div className="company-card"><img src={logo2} alt="Amdocs" /><span>Amdocs</span></div>
                <div className="company-card"><img src={logo3} alt="Cognizant" /><span>Cognizant</span></div>
                <div className="company-card"><img src={logo4} alt="Deloitte" /><span>Deloitte</span></div>
                <div className="company-card"><img src={logo5} alt="DE Shaw" /><span>DE Shaw</span></div>
                <div className="company-card"><img src={logo6} alt="ElasticRun" /><span>ElasticRun</span></div>
                <div className="company-card"><img src={logo7} alt="IBM" /><span>IBM</span></div>
                <div className="company-card"><img src={logo8} alt="Juspay" /><span>Juspay</span></div>
                <div className="company-card"><img src={logo9} alt="Ogilvy" /><span>Ogilvy</span></div>
                <div className="company-card"><img src={logo10} alt="Paytm" /><span>Paytm</span></div>
                <div className="company-card"><img src={logo11} alt="PLM" /><span>PLM</span></div>
                <div className="company-card"><img src={logo12} alt="Tata" /><span>Tata</span></div>
              </div>
            </section>
      
    </div>
  )
}

export default Companyplacement
