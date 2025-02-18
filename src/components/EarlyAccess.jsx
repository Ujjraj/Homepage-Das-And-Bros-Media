import React from "react";

const EarlyAccess = () => {
    return (
        <section className="py-12 bg-white flex justify-between items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold">Unlock Exclusive Early Access</h2>
            <p className="text-gray-600">Be the first to explore our new features!</p>
          </div>
          <div className="flex gap-2">
            <input type="email" placeholder="Your Email Here" className="px-4 py-2 border rounded-lg" />
            <button className="px-6 py-2 bg-black text-white rounded-lg">Join Now</button>
          </div>
        </section>
      );
};

export default EarlyAccess;
