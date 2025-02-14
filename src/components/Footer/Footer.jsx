import React from "react";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Edusity</h2>
          <p className="mt-3 text-gray-400 text-sm">
            Empowering students with quality education and learning experiences. Join us in shaping a brighter future!
          </p>
        </div>

        {/* Event Highlights Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Event Highlights</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-cyan-400 cursor-pointer">Innovative Tech Talks</li>
            <li className="hover:text-cyan-400 cursor-pointer">Interactive Workshops</li>
            <li className="hover:text-cyan-400 cursor-pointer">Networking Opportunities</li>
            <li className="hover:text-cyan-400 cursor-pointer">Industry Expert Panels</li>
            <li className="hover:text-cyan-400 cursor-pointer">Startup Showcases</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/Faredhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/fared_lukadeo?igsh=MWo5Zm40ODJpMmc2Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/sam-altman-1b314514"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-700 transition text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        <p>© 2025 Edusity. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-cyan-400">
            Terms of Service
          </a>
          <span>|</span>
          <a href="#" className="hover:text-cyan-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
