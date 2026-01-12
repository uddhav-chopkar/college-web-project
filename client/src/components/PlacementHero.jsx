import React from 'react'
import '../css/Hero.css' // Assuming you have a CSS file for styling
import img1 from '../assets/director1.jpg'

 // Placeholder for team member image
const PlacementHero = () => {
  return (
    <div>
      <header className="header">
              <h1>Placement</h1>
              <p>Welcome to the Placement Portal</p>

             

        </header>  
        

        <div className="box">
          <div className="stat internships">
            <p>8555+</p>
            <p className='para'>Internships</p>
          </div>
          <div className="stat students-placed">
            <p>503+</p>
            <p className='para'>Students Placed</p>
          </div>
          <div className="stat highest-package">
            <p>50 LPA</p>
            <p className='para'>Highest Package</p>
          </div>
          <div className="stat avg-package">
            <p>28 LPA</p>
            <p className='para'>Average Package</p>
          </div>
        </div>

        <div className="director">
          <div className="photo">
            <img src={img1} alt="" />
            <p className='name'> Dr. Shitalkumar Jain<br></br> Group Director -Placement and Corporate Relations </p>
           </div>
           <div className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro fugit repellendus minus? Veritatis ipsum, illo quidem aliquid, minus ad aut asperiores hic aspernatur nam reprehenderit nihil laudantium dicta pariatur exercitationem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo reprehenderit atque esse enim nam alias dolores est optio quasi quisquam placeat eveniet corporis, beatae autem laudantium maxime, rerum temporibus!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ipsam accusamus saepe, ducimus, unde a, sapiente quos cum quas doloremque minus mollitia animi non qui exercitationem. Dolore sunt accusantium quam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi eaque molestiae. Temporibus quo incidunt reprehenderit! Consequuntur ipsa aspernatur illo sapiente quo delectus quam ab unde, laborum corporis perspiciatis quasi.the 
           </div>
        </div>
   
    

    
   
    </div>

  )
}

export default PlacementHero