import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-4 ${
        isScrolled
          ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-lg"
          : "bg-transparent"
      } transition duration-300`}
    >
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
          {[
            { name: "Home", link: "hero" },
            { name: "Program", link: "program" },
            { name: "About Us", link: "about" },
            { name: "Campus", link: "campus" },
            { name: "Contact", link: "contact" },
          ].map((item, index) => (
            <li key={index} className="relative cursor-pointer text-white font-bold group">
              <Link
                to={item.link}
                smooth={true}
                duration={800}
                className="cursor-pointer"
              >
                {item.name}
              </Link>
              {/* Hover Underline Effect */}
              <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <ul
            className="text-center space-y-6 text-xl bg-gradient-to-b from-gray-900 to-gray-700 p-8 rounded-md animate-slide-down overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {[
              { name: "Home", link: "hero" },
              { name: "Program", link: "program" },
              { name: "About Us", link: "about" },
              { name: "Campus", link: "campus" },
              { name: "Contact", link: "contact" },
            ].map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer text-white font-bold hover:text-cyan-400 transition duration-300"
              >
                <Link
                  to={item.link}
                  smooth={true}
                  duration={800}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {/* Hover Underline Effect */}
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
