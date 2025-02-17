import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import LeadMagnet from "../components/LeadMagnet";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Testimonials />
      <LeadMagnet />
      <Footer />
    </>
  );
};

export default HomePage;
