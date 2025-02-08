import { Button } from "./ui/button";
import { Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center lg:col-span-6 lg:text-left">
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-blue-500 sm:text-5xl md:text-6xl">
              Skill your way up to success with us
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
              The Path To Our Dream Is Education
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdEPbW6trnnuRD9bHWvNfbEDDJcM_FSu90hBySO_qaoky5Csg/viewform" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto bg-[#000080] hover:bg-[#000080]/90">
                  Register
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/company/gudsky/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-3 w-full sm:ml-3 sm:mt-0 sm:w-auto border-[#000080] text-[#000080] hover:bg-[#000080]/10"
                >
                  Linkedin
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-12 lg:col-span-6 lg:mt-0 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <img
                className="w-full h-auto"
                src="src/assets/boy_wid_lappy.png-removebg-preview.png"
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
