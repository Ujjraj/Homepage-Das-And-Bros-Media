import React, { useState } from "react";
import { motion } from "framer-motion";

const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+86", country: "China" },
  { code: "+55", country: "Brazil" },
  { code: "+7", country: "Russia" },
];

const ContactFormPopup = ({ isOpen, onClose }) => {
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ service, email, phone: `${countryCode} ${phone}` });
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3 border border-gray-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Select Service</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="border rounded-lg w-full p-2"
                required
              >
                <option value="">Select a service</option>
                <option value="Growth Marketing">Growth Marketing</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Digital Transformation">Digital Transformation</option>
                <option value="Other Services & Partnerships">Other Services & Partnerships</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <div className="flex">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border rounded-lg p-2 mr-2"
                >
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code}>{`${country} (${code})`}</option>
                  ))}
                </select>
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="border rounded-lg w-full p-2"
                  required
                  pattern="\\d{10}"
                  placeholder="Enter 10-digit number"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 border rounded-lg px-4 py-2 hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </form>
        </motion.div>
      </div>
    )
  );
};

export default ContactFormPopup;