import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Skill, StarsCanvas, Tech, Works } from './components';
import Certifications from "./components/certifications";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        {/* Hero Section with background gradient */}
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Tech Section */}
        <Tech />

        {/* Works Section */}
        <Works />

        {/* Skills Section */}
        <Skill/>

        {/* Certifications Section */}
        <Certifications  />

        <div className="relative z-0">
          {/* Contact Section */}
          <Contact />
          {/* Stars Canvas */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
