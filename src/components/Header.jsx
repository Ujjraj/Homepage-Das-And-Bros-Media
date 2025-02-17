// Enhanced Header.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/assets/logo.svg" 
            alt="Logo" 
            className="h-8 w-8"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Das & Bros Media
          </h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative text-gray-300 hover:text-white transition-colors
                    before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 
                    before:bg-blue-400 before:transition-all hover:before:w-full"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="md:hidden text-gray-300 hover:text-white">
          <FiMenu size={24} />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;