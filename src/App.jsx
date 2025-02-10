import React from 'react';
import './index.css'; // Importing global styles
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Program from './components/Programs/Program';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Program />
    </div>
  );
}

export default App;
