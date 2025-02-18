import React from "react";

const Testimonials = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="text-2xl">⭐⭐⭐⭐⭐</div>
      <blockquote className="text-xl font-semibold mt-4">
        "Das and Bros Media transformed our marketing strategy, leading to unprecedented growth. Their expertise in digital transformation is unmatched!"
      </blockquote>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
          <div>
            <p className="font-semibold">Jane Doe</p>
            <p className="text-sm text-gray-500">CEO, Tech Innovations</p>
          </div>
        </div>
        <img src="https://via.placeholder.com/50" alt="Webflow logo" />
      </div>
    </section>
  );
};

export default Testimonials;
