import { motion } from "framer-motion";
import React from "react";
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";
import "../index.css";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto bg-gradient-to-br from-teal-900 to-blue-900 overflow-hidden">
      {/* Background Particles - Responsive adjustments */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { 
              value: 80,
              density: {
                enable: true,
                value_area: 800,
                factor: {
                  xs: 0.5,
                  sm: 0.8,
                  md: 1
                }
              }
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { 
              value: 4,
              responsive: [
                {
                  maxWidth: 768,
                  value: 3
                },
                {
                  maxWidth: 425,
                  value: 2
                }
              ]
            },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
          },
        }}
      />

      {/* Main Content - Improved responsive layout */}
      <div className="absolute inset-0 container-custom flex flex-col justify-center items-start">
        <div className="flex flex-row items-start gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
          {/* Accent Line - Responsive sizing */}
          <div className="hidden sm:flex flex-col justify-center items-center mt-5">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-indigo-500" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* Hero Text - Responsive typography and spacing */}
          <div className="flex-1 max-w-3xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight sm:leading-snug">
              Hi, I'm <span className="text-gradient">Mayur Wagh</span>
            </h1>
            
            <p className="mt-3 sm:mt-4 text-white text-base sm:text-lg md:text-xl max-w-lg">
              DevOps Engineer and Frontend Developer passionate about creating
              efficient systems and intuitive user interfaces.
            </p>
            
            <TypeAnimation
              sequence={[
                "Building Seamless User Experiences.",
                1500,
                "Optimizing Workflows and Systems.",
                1500,
                "Delivering Scalable Solutions.",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white text-base sm:text-lg mt-3 sm:mt-4 block"
            />

            {/* Call-to-Actions - Responsive grid layout */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <a
                href="#projects"
                className="modern-button text-center text-sm sm:text-base bg-gradient-to-r from-teal-500 to-blue-600"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-teal-500 px-6 py-3 rounded-full text-teal-500 font-semibold hover:bg-teal-500 hover:text-white transition-all"
                >
                Get in Touch
              </a>
              <a
                href="/Mayur_Wagh_resume_7385360404.pdf"
                download="Mayur_Wagh_Resume.pdf"
                className="modern-button text-center text-sm sm:text-base bg-indigo-500"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Responsive positioning */}
      <div className="absolute bottom-8 sm:bottom-10 w-full flex justify-center items-center">
        <a href="#about" className="hover-card">
          <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-teal-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;