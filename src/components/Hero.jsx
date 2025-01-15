import { motion } from "framer-motion";
import React from "react";
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";
import "../index.css";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-br from-teal-900 to-blue-900">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" }, // White particles for contrast
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 4 },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff", // White links for better visibility
              opacity: 0.4,
              width: 1,
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

      {/* Main Content */}
      <div className="absolute inset-0 top-[15vh] max-w-7xl mx-auto px-6 sm:px-12 flex flex-row items-start gap-8">
        {/* Accent Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-indigo-500" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Hero Text */}
        <div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-snug">
            Hi, I'm <span className="text-indigo-500">Mayur Wagh</span>
          </h1>
          <p className="mt-4 text-white text-lg sm:text-xl max-w-lg">
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
            className="text-white text-lg mt-4 block"
          />

          {/* Call-to-Actions */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform"
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
              className="bg-indigo-500 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-teal-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-teal-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
