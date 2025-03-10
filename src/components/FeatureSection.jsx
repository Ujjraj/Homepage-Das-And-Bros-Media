import React from "react";
import featureImage from "../assets/Feature-list.jpg"; // Correct relative import

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-10 gap-x-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Empower Your Business to Reach New Heights
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

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={featureImage} alt="Feature List" className="w-full h-80 object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
