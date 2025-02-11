import React, { useState } from "react";
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
  const [hoveredImage, setHoveredImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [imageInfo, setImageInfo] = useState(null);

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleImageInfo = (image) => {
    setImageInfo(image);
    setShowInfo(true);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-black via-gray-700 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Campus Gallery</h2>

        {/* Image Slide Left/Right Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-80 transition-all"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-80 transition-all"
          onClick={handleNext}
        >
          &#8594;
        </button>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <div
              key={index}
              className={`w-80 h-96 p-4 relative rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out 
                ${hoveredImage === index ? "neon-glow-image" : "bg-white bg-opacity-5"}`}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* Hover Details Button */}
              <div
                className="absolute top-3 right-3 p-2 rounded-full bg-black text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ display: hoveredImage === index ? "block" : "none" }}
                onClick={() => handleImageInfo(image)}
              >
                <button
                  className="flex items-center justify-center text-xl"
                  title="View Details"
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </div>

              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg transform transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">{imageInfo.title}</h3>
            <p>{imageInfo.description}</p>
            <button
              className="mt-4 text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600"
              onClick={() => setShowInfo(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Neon Glow Effect */}
      <style jsx>{`
        .neon-glow-image {
          background: radial-gradient(circle, rgba(0, 0, 0, 0.3) 10%, rgba(0, 255, 0, 0.3) 90%);
          box-shadow: 0 0 25px rgba(0, 255, 0, 0.7), 0 0 50px rgba(0, 255, 0, 0.8);
        }

        .neon-glow-image:hover {
          box-shadow: 0 0 30px rgba(0, 255, 0, 1), 0 0 40px rgba(0, 255, 0, 1);
          animation: glow-animation 2s infinite alternate;
        }

        @keyframes glow-animation {
          0% {
            box-shadow: 0 0 25px rgba(0, 255, 0, 0.5), 0 0 50px rgba(0, 255, 0, 0.7);
          }
          100% {
            box-shadow: 0 0 35px rgba(0, 255, 0, 1), 0 0 55px rgba(0, 255, 0, 1);
          }
        }

        .fa-info-circle {
          font-size: 24px;
          color: #00ff00;
          transition: transform 0.3s ease;
        }

        .fa-info-circle:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Campus;
