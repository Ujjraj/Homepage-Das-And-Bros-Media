// components/HeroSection.jsx
import React from "react";

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
      <div className="w-1/2 bg-gray-200 h-full min-h-screen flex items-center justify-center">
        {/* Placeholder for image */}
      </div>
    </section>
  );
};

export default HeroSection;
