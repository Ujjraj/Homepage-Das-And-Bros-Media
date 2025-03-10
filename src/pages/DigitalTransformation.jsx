import React from "react";
import Header from "../components/Header";
import chatbotImage from "../assets/chatbot.avif"; // Import the chatbot image
import webDevImage from "../assets/WebDev.avif"; // Import the web development image

const DigitalTransformation = () => {
  const services = [
    {
      name: "AI-Driven Chatbots & Process Automation",
      description: "Implement AI-driven solutions to automate processes and enhance customer interactions.",
      pricing: "£5,000 – £50,000",
      deliveryTime: "1 – 3 months",
      image: chatbotImage, // Add the image here
    },
    {
      name: "Website & App Development",
      description: "Develop robust websites and applications tailored to your business needs.",
      pricing: "£3,000 – £25,000",
      deliveryTime: "4 – 12 weeks",
      image: webDevImage, // Add the image here
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

export default DigitalTransformation;
