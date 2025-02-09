import { useState } from "react";
import { Link } from "react-router-dom";

function BackgroundChanger() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200 flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
      <h1 className="text-center text-white text-3xl mb-4">Background Changer</h1>

      {/* Gradient Border Card with Neon Effect */}
      <div className="relative w-full max-w-md mx-auto">
        <div className="card animate-gradient-border p-6 bg-white rounded-xl shadow-lg">
          {/* Neon Glow Moving Around Card */}
          <div className="animate-neon-glow"></div>
          
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            "Success is not the key to happiness. Happiness is the key to success."
          </h2>
          <p className="text-center text-gray-600 italic">
            - Albert Schweitzer
          </p>
        </div>
      </div>

      {/* Color Change Buttons */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "violet" }}>Violet</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={() => setColor("navy")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "navy" }}>Navy</button>
        </div>
      </div>

      {/* Button to navigate to Password Generator */}
      <div className="text-center mt-8">
        <Link to="/password-generator">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-all duration-200">
            Go to Password Generator
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BackgroundChanger;
