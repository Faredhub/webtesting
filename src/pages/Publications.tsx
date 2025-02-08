import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Publications = () => {
  const blogs = [
    {
      title: "Comming Soon",
      author: "A Mani",
      date: "March 10, 2024",
      description: "Exploring how AI is transforming the education landscape",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Comming Soon",
      author: "B.P. Kaur",
      date: "August 22, 2024",
      description: "Tips and strategies for effective online learning",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Comming Soon",
      author: "J. Subramnyam",
      date: "March 8, 2024",
      description: "Tips and strategies for Indian Railways",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Comming Soon",
      author: "S. Sharma",
      date: "Nov 7, 2023",
      description: "Research on the AI implimentations In Recognizing the Aircrafts",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Publications</h1>
          <div className="grid md:grid-cols-2 gap-6 mb-16"> {/* Added bottom margin here */}
            {blogs.map((blog, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <div className="flex gap-2 mb-2">
                    <span className="text-sm text-gray-500">{blog.author}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  <p className="text-gray-700">{blog.description}</p>
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

export default Publications;
