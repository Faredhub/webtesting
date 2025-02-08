import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import x from "@/assets/x.png";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Courses</h1>

          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            AI Masterclass
          </h2>
          <h3 className="text-2xl font-bold text-gray-600 mb-4 text-center">
            Using Python Programming Language (Research Based)
          </h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            This 3-month masterclass offers a comprehensive learning experience
            designed for students eager to master Artificial Intelligence (AI)
            using Python. <br></br>The course is fully live and interactive,
            providing direct engagement with expert instructors.
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl border-red-100">
            <img
              src={x} // Use the imported image path
              alt="AI Masterclass"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex justify-center mt-8">
            <a href="https://drive.google.com/file/d/1jrzNB6tK7a-nBtJyF0DofcSRM0hDC5L_/view?usp=drive_link" target="_blank" rel="noopener">
              <Button
                size="lg"
                className="text-2xl bg-[#000080] hover:bg-[#000080]/90 px-8 py-4 rounded-lg font-semibold"
              >
                Know More
              </Button>
            </a>
          </div>
          <section className="py-12">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold text-primary mb-8 text-center">
                Tools & Platforms
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                The AI Masterclass leverages a variety of powerful tools and platforms to ensure a robust learning experience:
              </p>
              <ul className="text-lg text-gray-600 list-disc pl-6 mb-8">
                <li className="mb-2"><strong>Python</strong>: The primary programming language used for AI development.</li>
                <li className="mb-2"><strong>TensorFlow</strong>: An open-source platform for machine learning.</li>
                <li className="mb-2"><strong>Keras</strong>: A user-friendly neural network library for AI development.</li>
                <li className="mb-2"><strong>Jupyter Notebooks</strong>: An interactive computing environment for coding and collaboration.</li>
                <li><strong>Google Colab</strong>: A cloud-based platform for running Jupyter Notebooks.</li>
              </ul>
              <div className="rounded-lg overflow-hidden shadow-xl border-red-100 mb-16">
                <img
                  src="https://images.unsplash.com/photo-1559028012-d6363c72aae4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Tools & Platforms"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Course Details
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                The AI Masterclass covers the following key topics:
              </p>
              <ul className="text-lg text-gray-600 list-disc pl-6 mb-8">
                <li className="mb-2"><strong>Introduction to AI</strong>: Understanding the basics and history of AI.</li>
                <li className="mb-2"><strong>Python for AI</strong>: Mastering Python programming for AI applications.</li>
                <li className="mb-2"><strong>Machine Learning</strong>: Learning the fundamentals of machine learning algorithms.</li>
                <li className="mb-2"><strong>Deep Learning</strong>: Diving into neural networks and deep learning techniques.</li>
                <li className="mb-2"><strong>AI Projects</strong>: Hands-on projects to apply AI concepts in real-world scenarios.</li>
                <li><strong>Capstone Project</strong>: A final project to demonstrate the knowledge and skills acquired during the course.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
