import React from "react";

const Contact = () => {
    return (
        <section className="py-12 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">We're here to assist you with any questions or inquiries you may have.</p>
          <div className="mt-6">
            <p><strong>Email:</strong> <a href="mailto:hello@dasandbros.com" className="text-blue-500">hello@dasandbros.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+14991726464" className="text-blue-500">+1 499 172-6464</a></p>
            <p><strong>Office:</strong> 456 Example Ave, Sydney NSW 2000 AU</p>
          </div>
          <div className="mt-6 w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg">
            <span>Map Placeholder</span>
          </div>
        </section>
      );
};

export default Contact;
