// src/components/Footer.tsx
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  // Manage toggles for mobile sections
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#f6a623] text-[#E31A4E] px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact + Logo */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src="src/assets/footer.svg"
              alt="footer logo"
              className="h-32 w-auto"
            />
          </div>
          <div className="mt-6">
            <h4 className="font-bold text-lg mb-3">Contact Info</h4>
            <div className="space-y-2 text-sm text-pink-600">
              <p className="flex items-center gap-2">
                <FaEnvelope /> infoadisri@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +91 9250011077
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> ShivMitriya, D-258, Sector-63, Noida Uttar
                Pradesh
              </p>
            </div>

            <h4 className="font-bold text-lg mt-6 mb-3">Follow Us</h4>
            <div className="flex gap-3 text-[30px]">
              <FaInstagram className="text-pink-600 cursor-pointer" />
              <FaFacebook className="text-blue-600 cursor-pointer" />
              <FaWhatsapp className="text-green-500 cursor-pointer" />
              <FaLinkedin className="text-sky-700 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          {/* Mobile Toggle Title */}
          <div
            className="flex justify-between items-center md:block cursor-pointer md:cursor-default"
            onClick={() => toggleSection("links")}
          >
            <h4 className="font-bold text-lg mb-3">Quick Links</h4>
            <span className="md:hidden">
              {openSection === "links" ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          <ul
            className={`space-y-2 transition-all duration-300 ${
              openSection === "links" || openSection === null
                ? "block"
                : "hidden md:block"
            }`}
          >
            {[
              "Catalog",
              "About us",
              "Customization",
              "Teacher Training",
              "Career",
              "Contact Us",
            ].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-black">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Our Products */}
          <div
            className="flex justify-between items-center mt-6 md:block cursor-pointer md:cursor-default"
            onClick={() => toggleSection("products")}
          >
            <h4 className="font-bold text-lg mb-3">Our Products</h4>
            <span className="md:hidden">
              {openSection === "products" ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          <ul
            className={`space-y-2 transition-all duration-300 ${
              openSection === "products" || openSection === null
                ? "block"
                : "hidden md:block"
            }`}
          >
            {[
              "Pre-school Books",
              "School Books",
              "New Releases",
              "Catalog",
              "E-Sample Access",
            ].map((p, i) => (
              <li key={i}>
                <a href="#" className="hover:text-black">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Enquiry Form */}
        <div className="md:col-span-2">
          <div
            className="flex justify-between items-center md:block cursor-pointer md:cursor-default"
            onClick={() => toggleSection("form")}
          >
            <h4 className="font-bold text-lg mb-4">Enquiry Form</h4>
            <span className="md:hidden">
              {openSection === "form" ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          <form
            className={`grid grid-cols-1 md:grid-cols-2 gap-3 transition-all duration-300 ${
              openSection === "form" || openSection === null
                ? "grid"
                : "hidden md:grid"
            }`}
          >
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-2 border bg-white border-gray-300 rounded placeholder-[#039A9C]"
            />
            <input
              type="email"
              placeholder="E-mail*"
              className="w-full p-2 border bg-white border-gray-300 rounded placeholder-[#039A9C]"
            />
            <input
              type="text"
              placeholder="School Name*"
              className="w-full p-2 border bg-white border-gray-300 rounded placeholder-[#039A9C]"
            />
            <input
              type="text"
              placeholder="City*"
              className="w-full p-2 border bg-white border-gray-300 rounded placeholder-[#039A9C]"
            />
            <input
              type="text"
              placeholder="Phone*"
              className="w-full p-2 border bg-white border-gray-300 rounded placeholder-[#039A9C]"
            />
            <select className="w-full p-2 border bg-white border-gray-300 rounded text-[#039A9C]">
              <option>-Please Choose-</option>
              <option>Product Inquiry</option>
              <option>Support</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Message"
              className="md:col-span-2 w-full p-2 border bg-white border-gray-300 rounded h-24 placeholder-[#039A9C]"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 w-32 h-10 rounded-2xl bg-[#E31A4E] text-white py-2 rounded-10 font-bold hover:bg-pink-700 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
