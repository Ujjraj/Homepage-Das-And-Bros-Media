import React from "react";
import Header from "../components/Header";

const Cybersecurity = () => {
  const services = [
    {
      name: "Security Operations Center (SOC) Services",
      description: "Our SOC services provide 24/7 monitoring and threat detection to safeguard your business.",
      pricing: "£50,000+/year",
      deliveryTime: "Ongoing",
      image: "src/assets/SOC.avif",
    },
    {
      name: "Penetration Testing & Ethical Hacking",
      description: "Identify vulnerabilities in your systems with our comprehensive penetration testing.",
      pricing: "£3,000 – £10,000",
      deliveryTime: "2 – 4 weeks",
      image: "src/assets/PenTest.avif",
    },
    {
      name: "Security Awareness Training & Compliance",
      description: "Empower your team with the knowledge to prevent security breaches.",
      pricing: "£2,500 – £7,500",
      deliveryTime: "2 – 3 weeks",
      image: "src/assets/Compliance.avif",
    },
    {
      name: "Dark Web Monitoring & Threat Intelligence",
      description: "Stay ahead of threats with our dark web monitoring services.",
      pricing: "£5,000+/year",
      deliveryTime: "Ongoing",
      image: "src/assets/DarkWeb.avif",
    },
  ];

  return (
    <>
      <Header />
      <div className="p-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
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

export default Cybersecurity;