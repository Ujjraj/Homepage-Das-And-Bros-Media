// Enhanced Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiSearch, FiPenTool, FiShare } from "react-icons/fi";

const services = [
  { 
    title: "Web Development", 
    icon: <FiCode className="w-8 h-8 mb-4 text-blue-500" />,
    description: "Custom, responsive websites built with modern technologies"
  },
  { 
    title: "SEO & Marketing", 
    icon: <FiSearch className="w-8 h-8 mb-4 text-purple-500" />,
    description: "Data-driven strategies to boost your online visibility"
  },
  { 
    title: "Branding", 
    icon: <FiPenTool className="w-8 h-8 mb-4 text-green-500" />,
    description: "Complete visual identity and brand strategy development"
  },
  { 
    title: "Social Media", 
    icon: <FiShare className="w-8 h-8 mb-4 text-pink-500" />,
    description: "Engaging content and growth-focused social strategies"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to propel your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;