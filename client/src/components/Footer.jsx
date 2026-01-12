import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>We provide quality education with a focus on practical skills, industry-ready curriculum, and career growth for every student.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#departments">Departments</a></li>
            <li><a href="#placements">Placements</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <ul>
            <li><a href="#">Email: info@college.edu</a></li>
            <li><a href="#">Phone: +91 9876543210</a></li>
            <li><a href="#">Address: Pune, India</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="/adminRegister">Admin</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your College Name. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
