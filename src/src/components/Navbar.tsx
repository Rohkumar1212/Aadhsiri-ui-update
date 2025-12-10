// src/components/Navbar.tsx
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "Product",
    "Customization",
    "Teacher Training",
    "Events & News",
    "Careers",
    "Contact Us",
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-[#FCAF3F] text-sm px-4 md:px-6 py-2 text-gray-800 gap-3 md:gap-0">
        {/* Contact Info */}
        <div className="flex  sm:items-center gap-16 sm:gap-2 text-xs md:text-sm w-full">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-700" />
            <span className="break-all">infoadisri@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-700" />
            <span>+91 9250011077</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-start gap-4 text-lg">
          <FaInstagram className="cursor-pointer text-pink-600 hover:text-pink-700" />
          <FaFacebook className="cursor-pointer text-blue-600 hover:text-blue-700" />
          <FaWhatsapp className="cursor-pointer text-green-500 hover:text-green-600" />
          <FaLinkedin className="cursor-pointer text-sky-700 hover:text-sky-800" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between bg-[#1b1b1b] px-4 md:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="src/assets/logo.png" alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center border-b border-[#E31A4E] text-[#E31A4E]">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none px-2 py-1 w-100 text-sm md:text-lg text-white placeholder-[#E31A4E]"
          />
          <FaSearch />
        </div>

        {/* Desktop Buttons */}

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-4">
          {/* Search Toggle */}
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <FaSearch className="text-white text-lg" />
          </button>

          {/* Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-white text-xl" />
            ) : (
              <FaBars className="text-white text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden bg-[#1b1b1b] px-4 py-2 flex items-center border-b border-[#E31A4E] text-[#E31A4E]">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none px-2 py-1 w-500 text-white placeholder-[#E31A4E]"
          />
          <FaSearch />
        </div>
      )}

      {/* Menu Bar */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row justify-center gap-2 md:gap-4 bg-[#1b1b1b] px-4 md:px-4 py-3`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="px-4 py-2 bg-[#039A9C] text-white text-[16px] md:text-[16px] font-medium rounded-full hover:bg-[#077] transition text-center"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
