import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Company Logo" className="h-10" />

        {/* Hamburger Icon */}
        <div
          className="text-2xl cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">Program</li>
          <li className="cursor-pointer hover:text-gray-400">About Us</li>
          <li className="cursor-pointer hover:text-gray-400">Campus</li>
          <li className="cursor-pointer hover:text-gray-400">Testimonials</li>
          <li className="cursor-pointer hover:text-gray-400">Contact Us</li>
        </ul>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <ul className="mt-4 space-y-4 md:hidden">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">Program</li>
          <li className="cursor-pointer hover:text-gray-400">About Us</li>
          <li className="cursor-pointer hover:text-gray-400">Campus</li>
          <li className="cursor-pointer hover:text-gray-400">Testimonials</li>
          <li className="cursor-pointer hover:text-gray-400">Contact Us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
