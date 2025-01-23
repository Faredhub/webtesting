import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      title: "New AI Course Launch",
      date: "March 15, 2024",
      description: "Introducing our comprehensive AI Masterclass series",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Industry Partnership",
      date: "March 20, 2024",
      description: "GUDSKY partners with leading tech companies",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Upcoming News</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-gray-700">{item.description}</p>
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

export default News;