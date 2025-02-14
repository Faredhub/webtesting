import React from 'react';
import './index.css'; // Importing global styles
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Program from './components/Programs/Program';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Program />
      <About/>
      <Campus/>
      <Contact/>
    </div>
  );
}

export default App;
