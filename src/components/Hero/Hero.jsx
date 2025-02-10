import React from "react";
import heroImage from "../../assets/hero.png";
import arrowImage from "../../assets/dark-arrow.png"; // Import the arrow image

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with Gradient */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          We Ensure Better Creation for a Better World
        </h1>
        <p className="text-white text-xl md:text-2xl mb-6">
          Experience the best service and features.
        </p>

        {/* Get Started Button with Gradient & Hover Effect */}
        <div className="flex justify-center mt-6"> {/* Center the button */}
          <button className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-orange-500 to-blue-900 text-white rounded-full hover:from-orange-600 hover:to-blue-950 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg flex items-center justify-center gap-2">
            Explore More
            {/* Arrow Image inside the button */}
            <img
              src={arrowImage}
              alt="Arrow"
              className="w-5 h-5 animate-bounce hover:scale-110 transition duration-300 ease-in-out"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
