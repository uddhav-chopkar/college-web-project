import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import { FcEngineering } from "react-icons/fc";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>
          <FcEngineering />
        </span>
        <a href="/">POLLY</a>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link
            className={active == "Home" ? "decoration" : ""}
            onClick={() => {
              setActive("Home");
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={active == "About" ? "decoration" : ""}
            onClick={() => {
              setActive("About");
            }}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={active == "Programs" ? "decoration" : ""}
            onClick={() => {
              setActive("Programs");
            }}
            to="/programms"
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            className={active == "Placements" ? "decoration" : ""}
            onClick={() => {
              setActive("Placements");
            }}
            to="/placements"
          >
            Placements
          </Link>
        </li>
        <li>
          <Link
            className={active == "Events" ? "decoration" : ""}
            onClick={() => {
              setActive("Events");
            }}
            to="/events"
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            className={active == "Contact" ? "decoration" : ""}
            onClick={() => {
              setActive("Contact");
            }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>

      <Link to={"/contact"}>
        <button>Enquiry</button>
      </Link>
    </nav>
  );
}

export default Navbar;
