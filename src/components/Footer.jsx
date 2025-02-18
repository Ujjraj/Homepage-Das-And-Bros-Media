import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white text-center">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Subscribe for updates</h3>
        <p className="text-gray-400">Stay informed with our latest news and insights.</p>
        <div className="mt-2 flex justify-center gap-2">
          <input type="email" placeholder="Your email here" className="px-4 py-2 rounded-lg bg-white text-black" />
          <button className="px-4 py-2 bg-blue-500 rounded-lg">Join</button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-400">
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Case Studies</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Resources</h4>
          <ul>
            <li>FAQs</li>
            <li>Support Center</li>
            <li>Testimonials</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legal Links</h4>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
      <p className="text-gray-500 mt-4">© 2024 Das and Bros Media. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
