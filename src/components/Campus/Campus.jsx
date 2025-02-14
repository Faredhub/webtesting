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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [imageInfo, setImageInfo] = useState(null);

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
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-80 transition-all z-10"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-80 transition-all z-10"
          onClick={handleNext}
        >
          &#8594;
        </button>

        {/* Responsive Image Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-4 relative"
              >
                <div
                  className={`w-full h-96 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out bg-white bg-opacity-5`}
                  onClick={() => handleImageInfo(image)}
                >
                  <img
                    src={image.src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
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

      {/* Updated "See More Info" Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-md transform transition-all hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-indigo-400">
          See more info Here
        </button>
      </div>
    </div>
  );
};

export default Campus;
