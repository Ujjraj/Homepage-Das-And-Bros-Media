import React from "react";

const About = () => {
    return (
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              <span className="text-gray-500">[Image Placeholder]</span>
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
