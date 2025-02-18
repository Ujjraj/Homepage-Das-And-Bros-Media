// components/FeatureSection.jsx
import React from "react";

const FeatureSection = () => {
  return (
    <section className="flex items-center justify-between p-10">
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-4">
          Unlock Your Business Potential with Our Comprehensive Digital Solutions
        </h2>
        <p className="mb-6">
          At Das and Bros Media, we specialize in driving growth through innovative
          marketing strategies. Our services range from cybersecurity to AI-powered marketing,
          ensuring your business thrives in the digital landscape.
        </p>
        <ul className="list-none space-y-2">
          <li>✔ Growth Marketing that Scales Your Business Effectively</li>
          <li>✔ Robust Cybersecurity to Protect Your Digital Assets</li>
          <li>✔ AI-Powered Marketing for Targeted Customer Engagement</li>
        </ul>
      </div>
      <div className="w-1/2 bg-gray-200 h-80"> {/* Placeholder for image */}</div>
    </section>
  );
};

export default FeatureSection;