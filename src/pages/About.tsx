import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import images
import image1 from '../assets/image.png';
import image2 from '../assets/visit.bmp';
import image3 from '../assets/authors.bmp';
import image4 from '../assets/conference.bmp';
import boyImage from '../assets/boy_wid_lappy.png-removebg-preview.png';  // Correct relative path

const About = () => {
  // Updated images array
  const images = [
    image1,
    image2,
    image3,
    image4,
    boyImage,
  ];

  const teamMembers = [
    // Your team members data here
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Other content sections */}
          
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8">Some Memories</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <img src={image} alt={`Image ${index + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </section>
          
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
