import React from 'react'
import "../Css/eventdes.css";
import ClgEvent from '../assets/college event.jpg';
const Eventdes = () => {
  return (
     <div className='event-container'>
          
    
          {/* Event Description Section */}
          <div className="event-description-section">
            <img src={ClgEvent} alt="College Event" className="college-event-image" />
            <div className='college-event-text'>
              <h2>About Our Events</h2>
              <p>
                At <strong>Kampthee Polytechnic</strong>, we believe in empowering students beyond the classroom.
                Our flagship event, <strong>“ANTARAGNI 2K25”</strong>, is a vibrant celebration of innovation, creativity,
                and talent. This annual cultural and technical fest brings together brilliant minds and passionate
                performers from various departments under one roof.
              </p>
              <p>
                From adrenaline-pumping technical competitions, robotics showcases, and code battles,
                to mesmerizing dance performances, musical nights, and drama acts,
                <strong> ANTARAGNI</strong> creates a perfect blend of intellect and entertainment.
              </p>
              <h3>✨ Highlights of ANTARAGNI 2K25:</h3>
              <ul>
                <li>Live Tech Exhibitions & Innovation Showcases</li>
                <li>Cultural Performances & Talent Hunts</li>
                <li>Hackathons, Gaming Zones & Quizzes</li>
                <li>Art Gallery, Photography Contests & Open Mic</li>
                <li>Sports Championships & Award Ceremonies</li>
              </ul>
              <p>
                This event is not just a fest — it's an unforgettable experience that reflects the spirit,
                energy, and excellence of <strong>Kampthee Polytechnic</strong>. It’s where dreams ignite,
                and memories are made.
              </p>
            </div>
          </div>
          </div>
  )
}

export default Eventdes
