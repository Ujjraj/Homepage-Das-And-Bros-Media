import React from "react";

const LeadMagnet = () => {
  return (
    <section className="bg-gray-900 text-white py-16 text-center">
      <h2 className="text-3xl font-bold">Get a Free Consultation</h2>
      <p className="mt-2 text-lg">Subscribe to our newsletter and receive a free consultation session.</p>
      <div className="mt-6 flex justify-center">
        <input type="email" placeholder="Enter your email"
          className="p-3 w-64 rounded-l-lg text-black bg-white"
        />
        <button className="px-6 py-3 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default LeadMagnet;
