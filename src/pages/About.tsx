import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const teamMembers = [
    {
      image: "/lovable-uploads/fc48d5d4-1c82-411e-8fa6-23444c5808da.png",
      name: "Rahul Kumar",
      role: "CEO & Founder",
      description: "Leading GUDSKY's vision and strategy for educational innovation."
    },
    {
      image: "/lovable-uploads/317a747d-443c-4559-b705-89caae8ab19d.png",
      name: "Priya Sharma",
      role: "Head of Research",
      description: "Overseeing research initiatives and academic partnerships."
    },
    {
      image: "/lovable-uploads/93838002-fddf-4f30-82dc-3f8096d6ed0b.png",
      name: "Anjali Patel",
      role: "Chief Technology Officer",
      description: "Driving technological advancement and platform development."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">About GUDSKY</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <p className="text-lg mb-6">
                GUDSKY is dedicated to transforming education through innovative learning solutions. Our mission is to provide accessible, high-quality education that empowers individuals to achieve their dreams.
              </p>
              <p className="text-lg mb-6">
                With a focus on AI and modern technology, we're building a community of lifelong learners who are ready to tackle the challenges of tomorrow.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="transform transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-32 h-32 mb-4">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-muted-foreground">{member.description}</p>
                    </div>
                  </CardContent>
                </Card>
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