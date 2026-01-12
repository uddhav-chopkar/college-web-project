import React from 'react';

import Cardevent from './Cardevent';
import '../Css/cardevent.css';

// cards k data
import ClgEvent from '../assets/college event.jpg';
import republicday from '../assets/republicday.jpg';
import yogaDay from '../assets/yogaDay.webp';
import culturalNight from '../assets/culturalevent.jpeg';
import sportsDay from '../assets/sportsday.jpeg';
import innovation from '../assets/innovationExpo.jpeg';
import gaming from '../assets/gamingzones.jpeg';
import ganeshfestival from '../assets/ganeshfestival.jpeg';
import hackthons from '../assets/hackthons.jpeg';
import industrialvisit from '../assets/industrialvisithingna.jpeg';
import livetech from '../assets/livetech.jpg';
import placementdrive from '../assets/placementdrive.jpeg';
import projectexhibition from '../assets/projectexhibiton.jpg';
import sixmonthsinternship from '../assets/sixmothsinternship.jpg';
import smartindia from '../assets/smartindiahackthons.jpeg';
import talenthunt from '../assets/talenthunt.webp';
import convation from '../assets/11thconvationceremony.webp';
import metting from '../assets/24thmeeting.jpeg';






// cards ka Data 
const cardData = [
  { image: republicday, title: "Republic Day Celebration" },
  { image: yogaDay, title: "11th Antarrashtriya Yoga Day" },
  { image: culturalNight, title: "Cultural Night" },
  { image: sportsDay, title: "Sports Day" },
  { image: innovation, title: "Innovation Expo" },
  { image: gaming, title: "Gaming Zones" },
  { image: ganeshfestival, title: "Ganesh Festival Celebration" },
  { image: hackthons, title: "Hackathons 2024" },
  { image: industrialvisit, title: "Industrial Visit at Polytechnic College" },
  { image: livetech, title: "Live Tech Expo" },
  { image: placementdrive, title: "Placement Drive 2024" },
  { image: projectexhibition, title: "Project Exhibition" },
  { image: sixmonthsinternship, title: "Six Months Internship Exam" },
  { image: talenthunt, title: "Talent Hunt" },
  { image: convation, title: "11th Convocation Ceremony" },
  { image: metting, title: "24th Meeting of Board" },
  
  
];

   

const EventContainer = () => {
  return (
    <div className='event-container'>
        {/* Event Cards Section */}
      <div className='event-card-highlight-section'>
        <h2>Events and Programs</h2>
        <div className='event-card-container'>
          {cardData.map((card, index) => (
            <Cardevent key={index} image={card.image} title={card.title} />
          ))}
        </div>
      </div>



    </div>
  );
};

export default EventContainer;
