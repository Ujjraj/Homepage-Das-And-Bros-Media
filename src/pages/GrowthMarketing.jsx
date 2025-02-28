import React from "react";
import Header from "../components/Header";

const GrowthMarketing = () => {
  const services = [
    {
      name: "Omni-channel Lead Generation & Sales Closure",
      description: "Boost your sales with our comprehensive lead generation strategies across multiple channels.",
      pricing: "£2,500 – £10,000/month",
      deliveryTime: "Monthly",
      image: "https://via.placeholder.com/300", // Replace with a relevant free image URL
    },
    {
      name: "Performance Marketing & Ad Campaigns",
      description: "Optimize your ad spend with targeted performance marketing campaigns.",
      pricing: "£1,500 – £7,500",
      deliveryTime: "2 – 6 weeks",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Social Media Growth & Branding Strategy",
      description: "Enhance your brand's presence on social media with our strategic growth plans.",
      pricing: "£2,000 – £10,000",
      deliveryTime: "1 – 3 months",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Influencer & UGC Marketing",
      description: "Leverage influencer partnerships and user-generated content to expand your reach.",
      pricing: "Commission-based (20-30%)",
      deliveryTime: "Ongoing",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Growth Marketing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-lg mb-4" />
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

export default GrowthMarketing; 