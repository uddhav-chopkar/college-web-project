import React from 'react'
import '../Css/aboutfounder.css';
import Chairman from '../assets/chairman.jpg';

const Aboutfounders = () => {
  return (
    <div className='about-container'>
    <div className="chairman-section">
            <img src={Chairman} alt="Chairman" className="chairman-img" />
            <div className="chairman-text">
              <h2>Dr. S. Cletus Babu</h2>
              <h3>Chairman</h3>
              <p>
                As  Kamptee Polytechnic College celebrates its 25th year, a spirit of gratitude and oneness surrounds every member of the Kamptee Polytechnic  family. Since 1997, this institution has served rural students with the mission to "Reach the Unreached" and create social change.
                <br /><br />
                Starting with 150 students in 4 departments, today it stands as a symbol of technical excellence. The vision of building a divine institution that serves the community continues to guide us. We thank all the staff and pray for continued blessings as we embrace the future with commitment and responsibility.
              </p>
            </div>
          </div>
        </div>
  )
}

export default Aboutfounders
