import React from "react";
import heroImage from "../../assets/hero.png";
import { CgOverflow } from "react-icons/cg";

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
          Welcome to the Hero Section
        </h1>
        <p className="text-white text-xl md:text-2xl mb-6">
          Experience the best service and features.
        </p>
        
        {/* Get Started Button with Gradient & Hover Effect */}
        <button className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-cyan-400 to-pink-500 text-white rounded-full hover:from-cyan-500 hover:to-pink-600 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
