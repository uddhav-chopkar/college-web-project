import React from "react";
import EventContainer from "../components/EventContainer";
import Testimonials from "../components/Testimonials";
import Aboutfounders from "../components/Aboutfounders";
import EnquirySwiper from "../components/EnquirySwiper";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
      <Hero />
      <EventContainer />
      <Aboutfounders />
      <Testimonials />
      <EnquirySwiper />
    </>
  );
};

export default Home;
