import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import ContactFormPopup from "./ContactFormPopup";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      dropdown: [
        { name: "Growth Marketing", href: "/growth-marketing" },
        { name: "Cybersecurity", href: "/cybersecurity" },
        { name: "Digital Transformation", href: "/digital-transformation" },
        { name: "Other Services & Partnerships", href: "/other-services-partnerships" },
      ],
    },
    { name: "Blog", href: "/#blog" },
    { name: "Contact Us", href: "#", onClick: () => setIsPopupOpen(true) },
    { name: "Hiring", href: "/hiring" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 h-16 md:h-20 bg-black backdrop-blur-md z-50 border-b border-gray-700 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="src/assets/logo.png"
              alt="Logo"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative group"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button className="text-gray-300 hover:text-white flex items-center space-x-1">
                        {item.name}
                        <FiChevronDown size={14} />
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white shadow-lg rounded-lg w-52 py-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block px-4 py-2 hover:bg-gray-700 transition"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button onClick={item.onClick} className="text-gray-300 hover:text-white transition-colors
                      before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 
                      before:bg-blue-400 before:transition-all hover:before:w-full">
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white">
            <FiMenu size={24} />
          </button>
        </div>
      </motion.header>
      <ContactFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Header;
