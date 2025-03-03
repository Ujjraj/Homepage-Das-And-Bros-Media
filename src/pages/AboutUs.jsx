import React from "react";
import Header from "../components/Header";
import AboutImage from "../assets/About.jpg"; // Adjust path as needed

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      
      <section className="py-16 text-center bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            At Das and Bros Media Pvt Ltd, we are committed to driving growth and innovation for our clients. Our team of experts specializes in digital marketing, cybersecurity, and AI solutions.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Our mission is to empower businesses to reach new heights through cutting-edge technology and strategic insights. Join us on our journey to transform the digital landscape.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 shadow-lg rounded-lg overflow-hidden">
            <img src={AboutImage} alt="About Us" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 leading-snug">
              Empowering businesses through innovative marketing and transformative digital solutions.
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Our mission is to drive growth and success for our clients through cutting-edge strategies and technology. We envision a future where every business can harness the power of digital transformation to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800">Our Vision</h2>
          <p className="text-lg text-gray-600 mt-4">
            To be a leading provider of innovative digital solutions that empower businesses to thrive in a rapidly changing world.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800">Our Values</h2>
          <ul className="mt-6 text-lg text-gray-600 space-y-4">
            <li><span className="font-semibold text-gray-800">Integrity:</span> We uphold the highest standards of integrity in all our actions.</li>
            <li><span className="font-semibold text-gray-800">Innovation:</span> We strive to innovate and improve continuously.</li>
            <li><span className="font-semibold text-gray-800">Customer Focus:</span> We are dedicated to meeting the needs of our clients.</li>
            <li><span className="font-semibold text-gray-800">Collaboration:</span> We believe in the power of teamwork and collaboration.</li>
            <li><span className="font-semibold text-gray-800">Excellence:</span> We pursue excellence in everything we do.</li>
          </ul>
        </div>
      </section>

      
    </div>
  );
};

export default AboutUs;