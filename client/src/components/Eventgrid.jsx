import React from 'react'
import "../Css/eventgrid.css";
const Eventgrid = () => {

  const eventImages = [
  { className: 'image1', title: 'Antarangi' },
  { className: 'image2', title: 'Certificate Distribution' },
  { className: 'image3', title: 'Cultural Events' },
  { className: 'image4', title: 'Annual Gathering' },
  { className: 'image5', title: 'Freshers Party' },
  { className: 'image6', title: 'Shiv Mahotsav' },
  { className: 'image7', title: 'Top Performers' },
  { className: 'image8', title: 'Uday Dance' },
  { className: 'image9', title: 'Group Dance' },
];

  return (
    <div className="eventgrid">
      {eventImages.map((item, index) => (
        <div key={index} className={`image-box ${item.className}`}>
          <div className="overlay-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Eventgrid;
