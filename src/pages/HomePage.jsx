import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import FeaturesList from "../components/FeaturesList";
import Benefits from "../components/Benefits";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Resources from "../components/Resources";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import EarlyAccess from "../components/EarlyAccess";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <FeaturesList />
      <Benefits />
      <About />
      <Blogs />
      <Resources />
      <Testimonials />
      <CTA />
      <EarlyAccess />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
