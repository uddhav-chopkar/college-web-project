import React from "react";
import ContactHero from "../components/ContactHero";
import EnquiryForm from "../components/EnquiryForm";
import EnquirySwiper from "../components/EnquirySwiper";
import Map from "../components/Map";
import Header from '../components/Header'

const Contact = () => {
  return (
    <>
    <Header/>
      <ContactHero />
      <EnquirySwiper />
      <Map />
      <EnquiryForm />
    </>
  );
};

export default Contact;
