import React from "react";

const testimonialsData = [
  {
    rating: "⭐⭐⭐⭐⭐",
    quote:
      "Das and Bros Media transformed our marketing strategy, leading to unprecedented growth. Their expertise in digital transformation is unmatched!",
    name: "Jane Doe",
    title: "CEO, Tech Innovations",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    quote:
      "Their creative approach and innovative solutions have taken our digital presence to the next level.",
    name: "John Smith",
    title: "CMO, Global Ventures",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    quote:
      "Partnering with Das and Bros Media was a game-changer. We saw measurable improvements in our ROI and customer engagement.",
    name: "Emily Johnson",
    title: "Founder, Startup Hub",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      {/* Slower scrolling animation */}
      <style>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scrollLeft 40s linear infinite;
        }
      `}</style>

      <div className="testimonials-track flex animate-scroll" style={{ width: "max-content" }}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-item mx-4 text-center min-w-[300px]">
            <div className="text-2xl">{testimonial.rating}</div>
            <blockquote className="text-xl font-semibold mt-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-4">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        ))}
        {/* Duplicate testimonials for continuous scrolling */}
        {testimonialsData.map((testimonial, index) => (
          <div key={`duplicate-${index}`} className="testimonial-item mx-4 text-center min-w-[300px]">
            <div className="text-2xl">{testimonial.rating}</div>
            <blockquote className="text-xl font-semibold mt-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-4">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
