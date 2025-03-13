import React, { useState, useEffect } from "react";

// Your provided image imports
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";

// Fallback image URL in case imports fail
const FALLBACK_IMAGE = "https://via.placeholder.com/300?text=Image+Not+Found";

// Program data with your images
const PROGRAM_DATA = [
  {
    image: program_1,
    title: "Nova Leverage",
    description: "Launch into a future of innovation.",
    details: "Master cutting-edge tech with cosmic precision.",
    orbitSpeed: 10,
    color: "#00d4ff",
  },
  {
    image: program_2,
    title: "Stellar Students",
    description: "Orbit through hands-on cosmic learning.",
    details: "Build skills that shine across galaxies.",
    orbitSpeed: 12,
    color: "#00ff99",
  },
  {
    image: program_3,
    title: "Galactic Leaders",
    description: "Command the stars of tomorrow.",
    details: "Develop interstellar leadership prowess.",
    orbitSpeed: 8,
    color: "#ff0066",
  },
];

const GalacticPrograms = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  // Orbit animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Handle image loading errors
  const handleImageError = (title, e) => {
    console.error(`Image failed to load for ${title}:`, e.target.src);
    setImageErrors((prev) => ({
      ...prev,
      [title]: `Failed to load image for ${title}. Using fallback.`,
    }));
    e.target.src = FALLBACK_IMAGE; // Switch to fallback
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-purple-950 flex items-center justify-center">
      <div className="relative w-full max-w-5xl h-[700px] mx-auto px-6">
        {/* Error Messages */}
        {Object.keys(imageErrors).length > 0 && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-900/80 text-white p-4 rounded-lg">
            {Object.values(imageErrors).map((error, idx) => (
              <p key={idx}>{error}</p>
            ))}
            <p>Check console (F12) for details or verify image paths.</p>
          </div>
        )}

        {/* Central Title */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h2 className="text-5xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
            Galactic Programs
          </h2>
          <p className="text-sm text-gray-300 mt-2">Explore Our Cosmic Offerings</p>
        </div>

        {/* Orbiting Planets */}
        <div className="relative w-full h-full">
          {PROGRAM_DATA.map((program, index) => {
            const angle = (index * 120 + rotation) % 360;
            const radius = 250;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className={`absolute w-56 h-56 rounded-full cursor-pointer transform transition-all duration-500 ease-in-out ${
                  hoveredPlanet === index ? "scale-110 z-20" : "scale-100 z-10"
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  background: `radial-gradient(circle, ${program.color}80, transparent)`,
                }}
                onMouseEnter={() => setHoveredPlanet(index)}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                {/* Planet Content */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-3/4 h-3/4 object-cover rounded-full shadow-lg transition-transform duration-300 hover:rotate-6"
                    onError={(e) => handleImageError(program.title, e)}
                    onLoad={() =>
                      setImageErrors((prev) => {
                        const newErrors = { ...prev };
                        delete newErrors[program.title];
                        return newErrors;
                      })
                    }
                  />
                  {/* Orbit Ring */}
                  <div
                    className="absolute inset-0 border-2 border-dashed rounded-full"
                    style={{
                      borderColor: program.color,
                      animation: `spin ${program.orbitSpeed}s linear infinite`,
                    }}
                  ></div>
                </div>

                {/* Info Card on Hover */}
                {hoveredPlanet === index && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full mt-4 
                      bg-black/90 rounded-lg p-4 shadow-xl w-64 border border-gray-700 z-30"
                  >
                    <h3 className="text-lg font-semibold text-white">{program.title}</h3>
                    <p className="text-sm text-cyan-300">{program.description}</p>
                    <p className="text-xs text-gray-400 mt-2">{program.details}</p>
                    <div
                      className="mt-2 h-1 w-12 rounded-full"
                      style={{ background: program.color }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: #000;
        }
        .min-h-screen {
          min-height: 100vh;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default GalacticPrograms;