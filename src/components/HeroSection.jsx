import React from "react";
import heroImage from "../assets/hero-image.jpg"; // Corrected relative import

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between p-0 w-full h-screen">
      <div className="w-1/2 p-10">
        <h1 className="text-4xl font-bold mb-4">
          Transform Your Business with Expert Solutions
        </h1>
        <p className="mb-6">
          At Das and Bros Media Pvt Ltd, we specialize in Growth Marketing, 
          Cybersecurity, and AI-Powered Digital Transformation. Let us help you build 
          effective funnels and elevate your business to new heights.
        </p>
        <div className="flex gap-4">
          <button className="bg-black text-white px-4 py-2 cursor-pointer hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors duration-200">
            Get Started
          </button>
          <button className="border px-4 py-2 cursor-pointer transition-colors duration-200 hover:bg-black hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-1/2 h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover rounded-lg shadow-lg transform scale-110"
        />
      </div>
    </section>
  );
};

export default HeroSection;
