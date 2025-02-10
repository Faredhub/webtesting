import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <img src={logo} alt="Company Logo" className="h-10" />
      <ul className="flex space-x-6">
        <li className="cursor-pointer hover:text-gray-400">Home</li>
        <li className="cursor-pointer hover:text-gray-400">Program</li>
        <li className="cursor-pointer hover:text-gray-400">About Us</li>
        <li className="cursor-pointer hover:text-gray-400">Campus</li>
        <li className="cursor-pointer hover:text-gray-400">Testimonials</li>
        <li className="cursor-pointer hover:text-gray-400">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
