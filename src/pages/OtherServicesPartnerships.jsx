import React from "react";
import Header from "../components/Header";

const OtherServicesPartnerships = () => {
  const services = [
    {
      name: "Cybersecurity & Growth Marketing Training",
      description: "Enhance your skills with our comprehensive training programs.",
      pricing: "£500 – £2,000",
      deliveryTime: "2 – 4 weeks",
    },
    {
      name: "High-ticket Sales Consulting",
      description: "Expert consulting to boost your high-ticket sales strategies.",
      pricing: "£5,000 – £25,000",
      deliveryTime: "1 – 3 months",
    },
    {
      name: "Affiliate & Partnership Programs",
      description: "Join our affiliate program and earn commissions on referrals.",
      pricing: "20% Commission",
      deliveryTime: "Ongoing",
    },
  ];

  return (
    <>
      <Header />
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <p className="mt-4"><strong>Pricing:</strong> {service.pricing}</p>
              <p><strong>Delivery Time:</strong> {service.deliveryTime}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OtherServicesPartnerships;
