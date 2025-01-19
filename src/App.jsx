import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Skill, Tech, Works } from "./components";
import StarsCanvas from "./components/canvas/Stars";
import Certifications from "./components/certifications";

function App() {
  const [starsLoaded, setStarsLoaded] = useState(false);

  const handleStarsLoaded = () => {
    setStarsLoaded(true);
  };

  return (
    <BrowserRouter>
      <div className="relative">
        {/* Stars Canvas as Background */}
        <div
          className={`absolute inset-0 -z-10 transition-colors duration-500 ${
            starsLoaded ? "bg-transparent" : "bg-black"
          }`}
        >
          <StarsCanvas onLoad={handleStarsLoaded} />
        </div>

        {/* App Content */}
        <Navbar />
        <Hero />

        <main className="relative z-10">
          {/* About Section */}
          <About />

          {/* Experience Section */}
          <Experience />

          {/* Tech Section */}
          <Tech />

          {/* Works Section */}
          <Works />

          {/* Skills Section */}
          <Skill />

          {/* Certifications Section */}
          <Certifications />
        </main>

        {/* Contact and Stars */}
        <div className="relative z-10">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
