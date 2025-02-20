import React from "react";
import AboutImage from "../assets/About.jpg"; // Adjust the path based on your project structure

const About = () => {
    return (
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-64">
              <img 
                src={AboutImage} 
                alt="About Us" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Empowering businesses through innovative marketing and transformative
                digital solutions.
              </h2>
              <p className="text-gray-600">
                At Das and Bros Media Pvt Ltd, our mission is to drive growth and
                success for our clients through cutting-edge strategies and
                technology. We envision a future where every business can harness
                the power of digital transformation to achieve their goals.
              </p>
            </div>
          </div>
        </section>
      );
};

export default About;
