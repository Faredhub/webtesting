import Navbar from "@/components/Navbar";
import Announcement from "@/components/Announcement";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Box from "@/components/Box";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Announcement />
        <Hero />
        <Benefits />
        <Box />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
};

export default Index;