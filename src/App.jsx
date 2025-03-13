import React from 'react';
import './index.css'; // Import global styles
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Import Scroll Element from react-scroll
import { Element } from 'react-scroll';
import GalacticPrograms from './components/Programs/GalacticPrograms';



function App() {
  return (
  
    <div>
      <Navbar />

      {/* Wrapping sections with <Element> for smooth scrolling */}
      <Element name="hero">
        <Hero />
      </Element>


      <Element name="GalacticPrograms">
      <GalacticPrograms/>
      </Element>

        

      <Element name="about">
        <About />
      </Element>

      <Element name="campus">
        <Campus />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
    
   
  );
}

export default App;
