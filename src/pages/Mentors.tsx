import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Mentors = () => {
  const teamMembers = [
    {
      image: "src/assets/hooks/sachinesingh.bmp",
      name: "Er Sachin Singh",
      role: "Robotics Test Engineer at FluxAuto ",
      description: "Robotics Test Engineer at FluxAuto .",
    },
    {
      image: "src/assets/jaiprakash.bmp",
      name: "Er. Jai Parkash",
      role: "HOD CSE, GGI, Ludhiana, Punjab",
      description: "Nodal officer (Scholarships)",
    },
    {
      image: "src/assets/Ashisbhateja.bmp",
      name: "Prof. Ashish Bhateja",
      role: "HOD Robotics Engineering, GGI, Ludhiana, Punjab",
      description: "Driving technological advancement and platform development.",
    },
    {
      image: "/lovable-uploads/fc48d5d4-1c82-411e-8fa6-23444c5808da.png",
      name: "Abhishekh Kumar Shukla",
      role: "CEO & Founder",
      description: "Leading GUDSKY's vision and strategy for educational innovation.",
    },
    {
      image: "src/assets/priyajyoti.bmp",
      name: "Miss Priya Jyoti",
      role: "Assistant Professor, RIMT University",
      description: "Research Scholar",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Meet Our Mentors</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <p className="text-xl mb-6">
                When Education Goes Beyond Imagination.......
              </p>
            </div>
          </div>
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-32 h-32 mb-4">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground">
                        {member.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          <div className="flex justify-center mt-12 mb-20">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdplmEX9lLhh5Ow8OgBolndBowSoiSpB4PGv3u7ParoTwnRhw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg text-lg">
                Become a Mentor
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentors;
