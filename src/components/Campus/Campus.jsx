import React, { useState, useEffect, useRef } from "react";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";

const images = [
  { src: gallery_1, title: "Image 1", description: "This is a description of image 1." },
  { src: gallery_2, title: "Image 2", description: "This is a description of image 2." },
  { src: gallery_3, title: "Image 3", description: "This is a description of image 3." },
  { src: gallery_4, title: "Image 4", description: "This is a description of image 4." },
];

const Campus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const modalRef = useRef(null);

  // Continuous subtle rotation for dynamic effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Navigation for slider
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Open modal with specific image
  const handleImageInfo = (index) => {
    setModalIndex(index);
    setShowInfo(true);
  };

  // Close modal on click outside or Escape key
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowInfo(false);
    }
  };

  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      setShowInfo(false);
    }
  };

  // Add event listeners for modal accessibility
  useEffect(() => {
    if (showInfo) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [showInfo]);

  return (
    <div className="py-16 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced Glowing Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e1e2f_0%,#000000_100%)] animate-glow"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse-slow"></div>

      {/* Dynamic Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full animate-particle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse-slow">
          Campus Gallery
        </h2>

        {/* Navigation Buttons with Glow */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-80 transition-all z-10 glow-effect"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-80 transition-all z-10 glow-effect"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
        >
          →
        </button>

        {/* Image Slider with Dynamic Motion */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => {
              const angle = (index * 90 + rotation) % 360; // Subtle orbiting effect
              const offset = Math.sin((angle * Math.PI) / 180) * 5; // Small vertical motion
              return (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-4"
                >
                  <div
                    className="image-card w-full h-96 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out bg-white bg-opacity-10 hover:scale-105 hover:shadow-2xl cursor-pointer relative glow-effect"
                    onClick={() => handleImageInfo(index)}
                    style={{ transform: `translateY(${offset}px)` }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://viaplaceholder.com/300?text=Image+Not+Found";
                        console.error(`Failed to load image: ${image.src}`);
                      }}
                    />
                    {/* Hover Overlay with Glow */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 hover:opacity-100">
                      <h3 className="text-lg font-semibold text-white glow-text">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Modal with Glowing Effects */}
      {showInfo && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 transition-opacity duration-300">
          <div
            ref={modalRef}
            className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-2xl max-w-2xl w-full transform transition-all duration-300 scale-95 opacity-0 animate-modal-open glow-modal"
          >
            <img
              src={images[modalIndex].src}
              alt={images[modalIndex].title}
              className="w-full h-64 object-cover rounded-md mb-4 border-2 border-white/20"
              loading="lazy"
              onError={(e) => {
                e.target.src = "https://viaplaceholder.com/300?text=Image+Not+Found";
                console.error(`Failed to load modal image: ${images[modalIndex].src}`);
              }}
            />
            <h3 className="text-2xl font-semibold text-white mb-2 glow-text">
              {images[modalIndex].title}
            </h3>
            <p className="text-gray-300 mb-4">{images[modalIndex].description}</p>
            <div className="flex justify-between mb-4">
              <button
                className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 disabled:bg-gray-500 transition-all glow-effect"
                onClick={() => {
                  if (modalIndex > 0) setModalIndex(modalIndex - 1);
                }}
                disabled={modalIndex === 0}
              >
                Previous
              </button>
              <button
                className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 disabled:bg-gray-500 transition-all glow-effect"
                onClick={() => {
                  if (modalIndex < images.length - 1) setModalIndex(modalIndex + 1);
                }}
                disabled={modalIndex === images.length - 1}
              >
                Next
              </button>
            </div>
            <button
              className="text-white bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-all glow-effect"
              onClick={() => setShowInfo(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Call-to-Action Button with Glow */}
      <div className="flex justify-center mt-8 relative z-10">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full shadow-md transform transition-all hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-indigo-400 glow-effect">
          Explore Campus Gallery
        </button>
      </div>

      {/* Styles with Light and Motion */}
      <style jsx>{`
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-particle {
          animation: particleMove ${Math.random() * 5 + 2}s linear infinite;
        }
        @keyframes particleMove {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); opacity: 0; }
        }
        .animate-modal-open {
          animation: modalOpen 0.3s ease-out forwards;
        }
        @keyframes modalOpen {
          to { scale: 1; opacity: 1; }
        }
        .image-card:hover img {
          transform: scale(1.1);
        }
        .glow-effect {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
          animation: glowPulse 2s ease-in-out infinite;
        }
        .glow-text {
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.5);
        }
        .glow-modal {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
          animation: glowPulse 2s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3); }
          50% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5); }
        }
      `}</style>
    </div>
  );
};

export default Campus;