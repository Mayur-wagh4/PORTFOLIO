import { motion } from "framer-motion";
import React from "react";
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";
import { profile } from '../assets/index.js';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-teal-900 to-blue-900 overflow-hidden">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 4 },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
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
        className="absolute inset-0 w-full h-full"
      />

      <div className="absolute inset-0 container-custom flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center gap-6 px-4 w-full max-w-6xl">
          <div className="flex-1 max-w-3xl">
            <div className="hidden sm:flex flex-col items-center mt-5 absolute left-0">
              <div className="w-5 h-5 rounded-full bg-indigo-500" />
              <div className="w-1 h-80 violet-gradient" />
            </div>

            <h1 className="text-white text-5xl font-semibold leading-snug">
              Hi, I'm <span className="text-gradient">Mayur Wagh</span>
            </h1>
            <p className="mt-4 text-white text-lg max-w-lg">
              DevOps Engineer and Frontend Developer with 1+ years of experience in AWS cloud services, CI/CD automation, and containerization.
            </p>

            <TypeAnimation
              sequence={[
                "Optimizing Deployment Processes",
                1500,
                "Designing Scalable AWS Solutions",
                1500,
                "Automating Infrastructure",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white text-lg mt-4 block"
            />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="#projects"
                className="modern-button text-center bg-gradient-to-r from-teal-500 to-blue-600"
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
                href="/Professional-CV-Resume.pdf"
                download="Mayur_Wagh_Resume.pdf"
                className="modern-button text-center bg-indigo-500"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:ml-8">
            <img 
              src={profile} 
              alt="Mayur Wagh" 
              className="rounded-full w-48 h-48 mix-blend-normal md:w-64 md:h-64 object-cover border-4 border-teal-500 shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#about" className="hover-card">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-teal-500 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-teal-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
