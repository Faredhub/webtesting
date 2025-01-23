import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center lg:col-span-6 lg:text-left">
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            GUDSKY RESEARCH FOUNDATION
              <span className="block text-[#000080]">is Education</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
              Research-Based Startup: Dedicated to providing guidance and support to graduate and
              undergraduate students in their research projects.
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto bg-[#000080] hover:bg-[#000080]/90">
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="mt-3 w-full sm:ml-3 sm:mt-0 sm:w-auto border-[#000080] text-[#000080] hover:bg-[#000080]/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:col-span-6 lg:mt-0">
            <div className="relative">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="AI Research"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;