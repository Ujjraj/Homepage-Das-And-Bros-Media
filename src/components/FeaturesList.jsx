// components/FeatureListSection.jsx
import React from "react";

const FeaturesList = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-4">Unlock Your Business Potential with Us</h2>
      <p className="mb-6">
        At Das and Bros Media Pvt Ltd, we specialize in driving growth through innovative 
        marketing strategies and cutting-edge technology. Our tailored solutions empower 
        businesses to thrive in the digital landscape.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold">Why Choose Our Services?</h3>
          <p>Experience unparalleled support and expertise at every step.</p>
        </div>
        <div>
          <h3 className="font-bold">Our Comprehensive Service Offerings</h3>
          <p>From growth marketing to cybersecurity, we cover it all.</p>
        </div>
        <div>
          <h3 className="font-bold">Client Success Stories</h3>
          <p>See how we’ve transformed businesses like yours.</p>
        </div>
        <div>
          <h3 className="font-bold">Get Started Today</h3>
          <p>Join us and elevate your business to new heights.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;