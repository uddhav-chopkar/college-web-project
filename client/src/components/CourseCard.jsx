import React from 'react'
import '../css/coursecard.css'


// Impoeting Images //
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'           
import Img4 from '../assets/img4.jpg'
import Img5 from '../assets/img5.jpg'
import Img6 from '../assets/img6.jpg'
import Img7 from '../assets/img7.jpg'
import Img8 from '../assets/img8.jpg'
import Img9 from '../assets/img9.jpg'


const CourseCard = () => {
    return (
        <div className="hero">
            <div className="herocard">
                <img src={Img1} alt="Img here" />
                <p>⏳ Duration : 3 Years</p>
                <h3>Chemical Polytechnic</h3>
                <p>The course syllabus of the school has been designed by keeping in mind the Chemical Engineering syllabi of various international institutions. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quisquam.</p>
               <button className='btn'>Enquiry</button>
            </div>
            <div className="herocard">
                <img src={Img2} alt="Img here" />
                <p>⏳ Duration : 3 Years</p>
                <h3>Civil Polytechnic</h3>
                <p>The School of Civil Engineering, offers a comprehensive curriculum inspired by international standards, combining theoretical courses with hands-on laboratory experimentation.</p>
               <button className='btn'>Enquiry</button>
            </div>
            <div className="herocard">
                <img src={Img3} alt="Img here" />
                <p>⏳ Duration : 3 Years</p>
                <h3>Computer Polytechnic</h3>
                <p>The sustained effort is to produce computing graduates with potential to design and develop innovative approaches to programming and problem solving to meet the needs of knowledge era.</p>
               <button className='btn'>Enquiry</button>
            </div>
            <div className="herocard">
                <img src={Img4} alt="Img here" />
                <p>⏳ Duration : 3 Years</p>
                <h3>Computer Polytechnic (Software Polytechnic)</h3>
                <p>The Software Engineering program combines computer science principles with software engineering practices to prepare students for a successful career in developing high-quality software solutions. </p>
                <button className='btn'>Enquiry</button>
            </div>
            <div className="herocard">
                <img src={Img5} alt="Img here" />
                <p>⏳ Duration : 3 Years</p>
                <h3>Computer Science & Polytechnic(Artificial Intelligence and Machine Learning)</h3>
                <p>The Artificial Intelligence and Machine Learning domain develops intelligent, adaptive systems using machine learning, deep learning, and generative AI.</p>
               <button className='btn'>Enquiry</button>   
            </div>
            <div className="herocard">
                <img src={Img6} alt="Img here" />
                <p>⏳ Duration : 3 Years</p>
                <h3>Computer Science & Polytechnic(Data Science)</h3>
                <p>Data Science is an interdisciplinary field that leverages scientific methods, algorithms, and systems to extract insights and knowledge from structured and unstructured data.</p>
                <button className='btn'>Enquiry</button>
            </div>
            <div className="herocard">
                <img src={Img7} alt="Img here" />
                <p>⏳ Duration : 3 Years</p>
                <h3>Electronics and Telecommunication Polytechnic</h3>
                <p> Students gain industrial exposure through various Internship programs and are encouraged to undertake independent projects and seminars fostering creative thinking and problem-solving skills</p>
               <button className='btn'>Enquiry</button>
            </div>
            <div className="herocard">
                <img src={Img8} alt="Img here" />
                <p>⏳ Duration : 3 Years</p>
                <h3>Information Technology</h3>
                <p>The Information Technology program equips students with the skills and knowledge necessary to thrive in the fast-paced tech industry. Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                <button className='btn'>Enquiry</button>
            </div>
            <div className="herocard">
                <img src={Img9} alt="Img here" />
                <p>⏳ Duration : 3 Years</p>
                <h3>Mechanical Polytechnic</h3>
                <p>The polytechnicin Mechanical polytechnic program offers a comprehensive curriculum that integrates theoretical knowledge with hands-on skill development. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button className='btn'>Enquiry</button>
            </div>
            

        </div>
    )
}
export default CourseCard;