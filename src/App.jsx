import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Skill, StarsCanvas, Tech, Works } from './components';
import Certifications from "./components/certifications";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        {/* Hero Section with background gradient */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* About Section */}
        <About className="bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500" />

        {/* Experience Section */}
        <Experience className="bg-gradient-to-r from-teal-500 via-yellow-500 to-orange-500" />

        {/* Tech Section */}
        <Tech className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />

        {/* Works Section */}
        <Works className="bg-gradient-to-r from-pink-500 via-teal-500 to-yellow-500" />

        {/* Skills Section */}
        <Skill className="bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500" />

        {/* Certifications Section */}
        <Certifications className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500" />

        <div className="relative z-0">
          {/* Contact Section */}
          <Contact className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500" />
          {/* Stars Canvas */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
