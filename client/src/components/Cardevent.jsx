
import React from 'react'
import "../Css/cardevent.css"
const Cardevent = ({ image, title }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card-image' />
      <h3 className='card-title'>{title}</h3>
      <button className='card-button'>Read More</button>
    </div>
  )
}

export default Cardevent
