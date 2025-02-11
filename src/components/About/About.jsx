import React from 'react';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-green-800 min-h-screen flex justify-center items-center p-8">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl flex flex-col md:flex-row max-w-6xl gap-10">
        {/* Left Section */}
        <div className="relative flex-1">
          <img src={about_img} alt="About" className="w-full rounded-xl shadow-lg" />
          <img
            src={play_icon}
            alt="Play"
            className="w-16 h-16 absolute bottom-4 right-4 bg-black/50 p-2 rounded-full cursor-pointer hover:scale-110 transition-transform"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 text-white">
          <h3 className="text-lg font-semibold tracking-wider uppercase">About University</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Nurturing Tomorrow's Leaders Today
          </h2>
          <p className="text-base mt-4 leading-7">
            Our university is a place where students can grow and develop their skills and knowledge.
          </p>
          <p className="text-base mt-4 leading-7">
            Here rises tomorrow's leaders with brave and courageous mindsets, building valuable skills and embarking on an extraordinary journey toward shaping the future world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
