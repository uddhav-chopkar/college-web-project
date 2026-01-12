import React from 'react'
import '../Css/aboutclghistory.css'
import collegeImage from '../assets/college.webp';

const Aboutclghistory = () => {
  return (
    <div className='about-container'>
      <div className="college-section">
        <img src={collegeImage} alt="College" className="college-img" />
        <div className="college-text">
          <h2>About Our College</h2>
          <p>
                Founded in 1986, Kamptee Polytechnic College is a premier institute in Nagpur, Maharashtra. It is approved by AICTE and offers quality education in engineering diploma courses. With a focus on practical skills, modern infrastructure, and experienced faculty, the college supports holistic student development.
                <br /><br />
                Currently, the college offers After 10th diploma programs in Engineering with a total intake of 210 students per year. The fees are affordable (INR 18,000), making it accessible and valuable for aspiring engineers.
              </p>
            </div>
          </div>
          </div>
  )
}

export default Aboutclghistory
