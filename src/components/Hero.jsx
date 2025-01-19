import React from "react";
import { profile } from "../assets/index.js";

const Hero = () => {
  return (
    <main className="h-[100vh] w-full overflow-hidden bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.1)]">
      <div className="h-full w-full flex items-center justify-center px-6 lg:px-8">
        <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className="md:w-3/5 flex flex-col gap-4 lg:gap-6">
            <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold overflow-clip text-white text-center md:text-left leading-tight">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r overflow-clip from-teal-400 to-blue-400 inline-block">
                Mayur Wagh
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 text-center md:text-left max-w-2xl leading-relaxed">
              DevOps Engineer and Frontend Developer specializing in AWS cloud
              services and CI/CD automation.
            </p>

            <p className="text-lg sm:text-xl lg:text-2xl text-teal-300 font-medium text-center md:text-left">
              AWS Cloud & DevOps Engineer
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <a
                href="#projects"
                className="px-6 py-3 text-base lg:text-lg rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-teal-500/25"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-base lg:text-lg rounded-lg border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-teal-400/25"
              >
                Contact
              </a>

              <a
                href="/mayur_resume.pdf" // Correct path to the file in the public folder
                download
                className="px-6 py-3 text-base lg:text-lg rounded-lg bg-indigo-600 text-white hover:opacity-90 transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-indigo-600/25"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mb-6 md:mb-0 relative overflow-hidden">
            <img
              src={profile}
              alt="Mayur Wagh"
              className="w-full h-full object-cover rounded-full border-4 border-teal-400 shadow-xl hover:shadow-teal-400/50 transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
