import React, { useState } from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import { FaRocket } from "react-icons/fa";

const Programs = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleImageHover = (index) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  const handleButtonHover = (index) => {
    setHoveredButton(index);
  };

  const handleButtonLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-blue-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Our Programs</h2>

        {/* Responsive Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {[program_1, program_2, program_3].map((program, index) => (
            <div
              key={index}
              className={`w-80 h-96 p-4 rounded-xl relative shadow-xl transform transition-all duration-500 ease-in-out 
                ${hoveredImage === index ? "neon-glow-image" : "bg-white bg-opacity-5"}`
              }
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
            >
              <img
                src={program}
                alt={`Program ${index + 1}`}
                className="w-full h-full object-cover rounded-lg transform transition-all duration-500 ease-in-out"
              />
              {/* Neon Glow Button */}
              <button
                className="absolute top-4 right-4 bg-gradient-to-r from-black to-gray-900 p-3 rounded-full shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
                onMouseEnter={() => handleButtonHover(index + 1)}
                onMouseLeave={handleButtonLeave}
              >
                <FaRocket className="text-white text-2xl" />
              </button>

              {hoveredButton === index + 1 && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg max-w-xs flex items-center space-x-3 transition duration-300 ease-in-out">
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-700">
                      {index === 0
                        ? "Innovative program for a brighter future."
                        : index === 1
                        ? "Empowering students through hands-on learning."
                        : "Shaping the leaders of tomorrow."}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {index === 0
                        ? "This program focuses on practical knowledge and real-world experience."
                        : index === 1
                        ? "A program designed to enhance practical skills and networking opportunities."
                        : "A cutting-edge program aimed at developing leadership skills."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Neon Glow Effect */}
      <style jsx>{`
        .neon-glow-image {
          background: radial-gradient(circle, rgba(63, 94, 251, 0.3) 10%, rgba(252, 70, 107, 0.3) 90%);
          box-shadow: 0 0 25px rgba(63, 94, 251, 0.7), 0 0 50px rgba(252, 70, 107, 0.8);
        }

        .neon-glow-image:hover {
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.8), 0 0 40px rgba(255, 0, 150, 1);
          animation: glow-animation 2s infinite alternate;
        }

        @keyframes glow-animation {
          0% {
            box-shadow: 0 0 25px rgba(63, 94, 251, 0.5), 0 0 50px rgba(252, 70, 107, 0.7);
          }
          100% {
            box-shadow: 0 0 35px rgba(0, 255, 255, 1), 0 0 55px rgba(255, 0, 150, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default Programs;
