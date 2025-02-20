import React from "react";
import heroImage from "../assets/hero-image.jpg"; // Corrected relative import

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between p-10 w-full h-screen">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          Transform Your Business with Expert Solutions
        </h1>
        <p className="mb-6">
          At Das and Bros Media Pvt Ltd, we specialize in Growth Marketing, 
          Cybersecurity, and AI-Powered Digital Transformation. Let us help you build 
          effective funnels and elevate your business to new heights.
        </p>
        <div className="flex gap-4">
          <button className="bg-black text-white px-4 py-2">Get Started</button>
          <button className="border px-4 py-2">Learn More</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-1/2 h-full min-h-screen flex items-center justify-center">
        <img src={heroImage} alt="Hero" className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;
