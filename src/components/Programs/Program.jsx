import React, { useState } from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import { CgArrowLongRight } from "react-icons/cg"; // Add arrow icon for hover effect

const Programs = () => {
  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Our Programs</h2>
        
        {/* Program Cards */}
        <div className="flex justify-center gap-8">
          {/* Program 1 */}
          <div
            className="program w-96 h-96 bg-gradient-to-r from-cyan-400 to-pink-500 p-4 rounded-xl shadow-xl transform hover:scale-110 hover:shadow-2xl transition duration-500 ease-in-out relative border-4 border-transparent hover:border-8 hover:border-pink-600"
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleLeave}
          >
            <img
              src={program_1}
              alt="Program 1"
              className="w-full h-full object-cover rounded-lg transform transition duration-500 ease-in-out hover:scale-110"
            />
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              More Info
            </button>

            {hovered === 1 && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg max-w-xs flex items-center space-x-3 transition duration-300 ease-in-out">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-700">"Innovative program for a brighter future."</p>
                  <p className="text-xs text-gray-500 mt-2">This program focuses on practical knowledge and real-world experience.</p>
                </div>
                <CgArrowLongRight className="text-gray-800 text-xl animate-pulse" />
              </div>
            )}
          </div>

          {/* Program 2 */}
          <div
            className="program w-96 h-96 bg-gradient-to-r from-cyan-400 to-pink-500 p-4 rounded-xl shadow-xl transform hover:scale-110 hover:shadow-2xl transition duration-500 ease-in-out relative border-4 border-transparent hover:border-8 hover:border-pink-600"
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={handleLeave}
          >
            <img
              src={program_2}
              alt="Program 2"
              className="w-full h-full object-cover rounded-lg transform transition duration-500 ease-in-out hover:scale-110"
            />
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              More Info
            </button>

            {hovered === 2 && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg max-w-xs flex items-center space-x-3 transition duration-300 ease-in-out">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-700">"Empowering students through hands-on learning."</p>
                  <p className="text-xs text-gray-500 mt-2">A program designed to enhance practical skills and networking opportunities.</p>
                </div>
                <CgArrowLongRight className="text-gray-800 text-xl animate-pulse" />
              </div>
            )}
          </div>

          {/* Program 3 */}
          <div
            className="program w-96 h-96 bg-gradient-to-r from-cyan-400 to-pink-500 p-4 rounded-xl shadow-xl transform hover:scale-110 hover:shadow-2xl transition duration-500 ease-in-out relative border-4 border-transparent hover:border-8 hover:border-pink-600"
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={handleLeave}
          >
            <img
              src={program_3}
              alt="Program 3"
              className="w-full h-full object-cover rounded-lg transform transition duration-500 ease-in-out hover:scale-110"
            />
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              More Info
            </button>

            {hovered === 3 && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg max-w-xs flex items-center space-x-3 transition duration-300 ease-in-out">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-700">"Shaping the leaders of tomorrow."</p>
                  <p className="text-xs text-gray-500 mt-2">A cutting-edge program aimed at developing leadership skills.</p>
                </div>
                <CgArrowLongRight className="text-gray-800 text-xl animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
