import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const News = () => {
  const upcomingNewsItems = [
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

  const recentNewsItems = [
    {
      title: "Key Initiatives: Gudsky Virtual Research Center (VRC)",
      date: "January 01, 2024",
      description: "The VRC offers students 1-year free membership, enabling them to connect with professors, researchers, and industry professionals. This helps students enhance their portfolios, gain hands-on project experience, and improve job prospects.",
      image: "https://images.unsplash.com/photo-1573497019411-6b164cd88f17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Community Building",
      date: "January 05, 2024",
      description: "Colleges are encouraged to form their Gudsky Core Team, responsible for managing the student group, sharing updates, and organizing workshops.",
      image: "https://images.unsplash.com/photo-1559028012-d6363c72aae4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Workshops and Technical Sessions",
      date: "January 10, 2024",
      description: "The foundation organizes free sessions to introduce cutting-edge technologies and innovative methods for solving real-world problems.",
      image: "https://images.unsplash.com/photo-1581091215367-366ecf8222b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Guidance for Research Paper Writing and Publishing",
      date: "January 15, 2024",
      description: "Students are supported throughout the process of conducting research, writing papers, and publishing them in renowned conferences and journals.",
      image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Focus on Collaboration",
      date: "January 20, 2024",
      description: "Gudsky promotes collaboration among students, mentors, and institutions, fostering an ecosystem where knowledge sharing is central to growth.",
      image: "https://images.unsplash.com/photo-1581070204553-0cadc321e030?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Successful Workshop on AI",
      date: "January 10, 2024",
      description: "Our recent workshop on AI saw participation from over 200 students.",
      image: "https://images.unsplash.com/photo-1532618461204-8501fd2d29a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Research Paper Published",
      date: "February 05, 2024",
      description: "We are proud to announce the publication of our latest research paper.",
      image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">News</h1>
          
          <h2 className="text-3xl font-semibold text-primary mb-6">Upcoming News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {upcomingNewsItems.map((item, index) => (
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

          <h2 className="text-3xl font-semibold text-primary mb-6">Recent News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"> {/* Added bottom margin here */}
            {recentNewsItems.map((item, index) => (
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
