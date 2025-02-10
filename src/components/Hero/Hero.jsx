import React from "react";
import heroImage from "../../assets/hero.png";
import arrowImage from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with Gradient */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-md sm:max-w-xl">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug">
          We Ensure Better Creation for a Better World
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl mb-6">
          Experience the best service and features.
        </p>

        {/* Button with Neon Glow */}
        <div className="flex justify-center mt-6">
          <button className="relative px-6 py-2 sm:px-8 sm:py-3 text-white text-base sm:text-lg font-semibold bg-gradient-to-r from-orange-500 to-blue-900 rounded-full shadow-lg overflow-hidden neon-button">
            {/* Glow background */}
            <span className="absolute inset-0 rounded-full neon-glow"></span>
            <span className="relative z-10 flex items-center gap-2">
              Explore More
              <img
                src={arrowImage}
                alt="Arrow"
                className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce hover:scale-110 transition duration-300 ease-in-out"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
