import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-4 transition duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-lg"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Company Logo" className="h-10" />

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "Program", "About Us", "Campus", "Testimonials"].map(
            (item, index) => (
              <li
                key={index}
                className="relative cursor-pointer text-white text-lg font-semibold transition duration-300 hover:text-cyan-300"
              >
                <span className="hover-effect">{item}</span>
              </li>
            )
          )}
          {/* Contact Us Button */}
          <li>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition duration-300">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
