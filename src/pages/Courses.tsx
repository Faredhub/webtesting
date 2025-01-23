import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      title: "AI Fundamentals",
      duration: "8 weeks",
      level: "Beginner",
      description: "Learn the basics of artificial intelligence and machine learning",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Advanced Machine Learning",
      duration: "12 weeks",
      level: "Advanced",
      description: "Deep dive into advanced ML concepts and applications",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Advanced Machine Learning",
      duration: "12 weeks",
      level: "Advanced",
      description: "Deep dive into advanced ML concepts and applications",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
       {
      title: "Advanced Machine Learning",
      duration: "12 weeks",
      level: "Advanced",
      description: "Deep dive into advanced ML concepts and applications",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Courses</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex gap-2 mb-2">
                    <span className="text-sm text-gray-500">{course.duration}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{course.level}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <Button className="w-full">Enroll Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;