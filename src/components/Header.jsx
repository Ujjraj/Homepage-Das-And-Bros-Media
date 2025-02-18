import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "#about" },
    {
      name: "Services",
      dropdown: [
        { name: "Growth Marketing", href: "#growth-marketing" },
        { name: "Cybersecurity", href: "#cybersecurity" },
        { name: "Funnel Building", href: "#funnel-building" },
        { name: "AI Marketing", href: "#ai-marketing" },
        { name: "Digital Transformation", href: "#digital-transformation" },
      ],
    },
    { name: "Industries We Serve", href: "#industries" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 h-16 md:h-20 bg-black backdrop-blur-md z-50 border-b border-gray-700 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center w-full">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <img 
            src="src/assets/logo.png"  
            alt="Logo" 
            className="h-12 md:h-16 lg:h-20 w-auto max-h-[50px]"
          />
          
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                {/* DROPDOWN HANDLING */}
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

                    {/* DROPDOWN MENU */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 bg-gray-800 text-white shadow-lg rounded-lg w-48 py-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 hover:bg-gray-700 transition"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="relative text-gray-300 hover:text-white transition-colors
                      before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 
                      before:bg-blue-400 before:transition-all hover:before:w-full"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* LOGIN BUTTON */}
        <button className="hidden md:block border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
          Login
        </button>

        {/* MOBILE MENU */}
        <button className="md:hidden text-gray-300 hover:text-white">
          <FiMenu size={24} />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
