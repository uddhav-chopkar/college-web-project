import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Events from "./pages/Events.jsx";
import Placement from "./pages/Placement.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Programms from "./pages/Programms.jsx";
import AdminRegister from "./components/AdminRegistration.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import DashBoard from "./components/DashBoard.jsx";
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programms" element={<Programms />} />
        <Route path="/placements" element={<Placement />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminRegister" element={<AdminRegister/>} />
        <Route path="/adminLogin" element={<AdminLogin/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
