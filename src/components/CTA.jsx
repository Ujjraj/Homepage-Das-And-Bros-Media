import React from "react";

const CTA = () => {
    return (
        <section className="py-12 bg-gray-800 text-white flex justify-center items-center">
          <div className="max-w-4xl flex flex-col md:flex-row items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold">Let's Elevate Your Business Together</h2>
              <p className="mt-2">Contact us today to explore tailored solutions that drive growth and innovation for your business.</p>
              <div className="mt-4 flex gap-4">
                <button className="px-6 py-2 bg-white text-black rounded-lg">Get Started</button>
                <button className="px-6 py-2 border border-white rounded-lg">Request a Quote</button>
              </div>
            </div>
            <div className="w-40 h-40 bg-gray-500 flex items-center justify-center rounded-lg">
              <span>Image Placeholder</span>
            </div>
          </div>
        </section>
      );
};

export default CTA;
