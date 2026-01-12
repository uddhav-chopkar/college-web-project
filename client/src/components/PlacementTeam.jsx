import React from 'react'
import '../css/Hero.css' 
import img2  from '../assets/Hemant-Mali.png'
import img3 from '../assets/anuradha-pawar.jpeg'
import img4 from '../assets/Anu-Agrawal.png'
import img5 from '../assets/Anil-Pacha.png'

const PlacementTeam = () => {
  return (
    <div>
        <section className="placementTeam-section">
      <h2 className="team-title">Placement Team</h2>
      <div className="team-grid-simple">
        <div className="team-card-simple">
          <img className="team-photo-simple" src={img2} alt="Hemant Mali" />
          <div className="team-info-simple">
            <div className="team-name-simple">Hemant Mali</div>
            <div className="team-role-simple">Placement Officer</div>
          </div>
        </div>
        <div className="team-card-simple">
          <img className="team-photo-simple" src={img3} alt="Anuradha Pawar" />
          <div className="team-info-simple">
            <div className="team-name-simple">Anuradha Pawar</div>
            <div className="team-role-simple">Placement Coordinator</div>
          </div>
        </div>
        <div className="team-card-simple">
          <img className="team-photo-simple" src={img4} alt="Anu Agrawal" />
          <div className="team-info-simple">
            <div className="team-name-simple">Anu Agrawal</div>
            <div className="team-role-simple">Placement Coordinator</div>
          </div>
        </div>
        <div className="team-card-simple">
          <img className="team-photo-simple" src={img5} alt="Anil Pacha" />
          <div className="team-info-simple">
            <div className="team-name-simple">Anil Pacha</div>
            <div className="team-role-simple">Placement Coordinator</div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default PlacementTeam
