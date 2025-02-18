import React from "react";

const Benefits = () => {
    return (
        <section className="py-16 px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Unlock Your Business Potential with Us</h2>
              <p className="text-gray-600 mb-6">
                Experience a remarkable boost in ROI with our tailored marketing
                strategies. Our innovative solutions ensure your systems are secure
                and efficient.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Enhanced ROI</h3>
                  <p className="text-gray-500">
                    Maximize your returns with data-driven marketing and analytics.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Robust Security</h3>
                  <p className="text-gray-500">
                    Protect your assets with our advanced cybersecurity measures.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button className="px-6 py-2 bg-black text-white rounded mr-4">
                  Learn More
                </button>
                <button className="px-6 py-2 border border-black rounded">
                  Get Started
                </button>
              </div>
            </div>
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              <span className="text-gray-500">[Image Placeholder]</span>
            </div>
          </div>
        </section>
      );
};

export default Benefits;
