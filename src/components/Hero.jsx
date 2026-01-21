import React from "react";
import { motion } from "framer-motion";
import { profile } from "../assets/index.js";
import { FaAws, FaDocker, FaEnvelope, FaFileAlt, FaGithub, FaGitlab, FaJenkins, FaLinux, FaProjectDiagram, FaTerminal } from "react-icons/fa";
import { SiAnsible, SiGrafana, SiKubernetes, SiPrometheus, SiTerraform } from "react-icons/si";

const Hero = () => {
  const orbitIcons = [
    FaAws, FaDocker, SiKubernetes, FaGitlab, FaJenkins, SiTerraform,
    SiAnsible, SiPrometheus, SiGrafana, FaLinux, FaGithub, FaTerminal
  ];

  const skills = [
    "AWS Production Infrastructure",
    "Zero-Downtime Migrations",
    "Kubernetes (EKS)",
    "CI/CD Automation",
    "Terraform & Ansible",
    "Observability & Monitoring",
    "Cloud Security & IAM",
    "Cost Optimization"
  ];

  return (
    <main className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-sky-200/20 to-purple-200/10 animate-pulse" />
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-sky-400 rounded-full animate-float-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="h-full w-full flex items-center justify-center px-6 lg:px-8">
        <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side - Content */}
          <div className="md:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-hidden">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 text-center md:text-left leading-tight max-w-4xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <span className="text-sky-600">Mayur Wagh</span>
            </motion.h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 text-center md:text-left max-w-2xl leading-relaxed mt-2">
              DevOps Engineer with hands-on experience in zero-downtime cloud migrations, AWS microservices, and enterprise CI/CD platforms. I build production-grade infrastructure with 99.9% uptime, strong security posture, and optimized cloud costs at scale. <span className="text-sky-600 font-semibold">AWS cloud services</span>, <span className="text-indigo-600 font-semibold">CI/CD pipelines</span>, and <span className="text-purple-600 font-semibold">infrastructure automation</span>.
            </p>

            <p className="text-xl sm:text-2xl lg:text-3xl text-sky-700 font-bold text-center md:text-left mt-2">
              Cloud & DevOps Engineer
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 bg-sky-100/70 rounded-full text-sky-800 text-sm border border-sky-200 shadow-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 + Math.random(), delay: i * 0.15 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <a href="#projects" className="flex items-center gap-2 px-6 py-3 text-base lg:text-lg rounded-lg bg-sky-600 text-white hover:bg-sky-700 transform hover:scale-105 transition duration-200 shadow-lg shadow-sky-500/25">
                <FaProjectDiagram className="text-white text-xl" />
                Projects
              </a>
              <a href="#contact" className="flex items-center gap-2 px-6 py-3 text-base lg:text-lg rounded-lg border-2 border-sky-500 text-sky-700 hover:bg-sky-50 transform hover:scale-105 transition duration-200 shadow-sm">
                <FaEnvelope className="text-sky-700 text-xl" />
                Contact
              </a>
              <a href="/Mayur_Wagh_DevOps_Engineer.pdf" download className="flex items-center gap-2 px-6 py-3 text-base lg:text-lg rounded-lg bg-slate-900 text-white hover:bg-slate-800 transform hover:scale-105 transition duration-200 shadow-lg shadow-slate-900/15">
                <FaFileAlt className="text-white text-xl" />
                Resume
              </a>
              <a href="https://github.com/Mayur-wagh4" className="flex items-center gap-2 px-6 py-3 text-base lg:text-lg rounded-lg border-2 border-slate-200 text-slate-800 hover:bg-white transform hover:scale-105 transition duration-200 shadow-sm">
                <FaGithub className="text-slate-800 text-xl" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Side - Profile + Orbiting Icons */}
          <div className="relative w-64 h-64 lg:w-72 lg:h-72 flex items-center justify-center">
            
            {/* Orbiting Icons */}
            <div className="absolute inset-0 rounded-full animate-orbit">
              {orbitIcons.map((Icon, index) => {
                const angle = (360 / orbitIcons.length) * index;
                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{ transform: `rotate(${angle}deg) translate(140px) rotate(-${angle}deg)` }}
                    whileHover={{ scale: 1.5, filter: "drop-shadow(0 0 15px #38bdf8)" }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Icon className="text-sky-600 text-2xl" />
                  </motion.div>
                );
              })}
            </div>

            {/* Breathing Profile */}
            <motion.img
              src={profile}
              alt="Mayur Wagh"
              className="w-44 h-44 lg:w-52 lg:h-52 object-cover rounded-full border-4 border-sky-500 shadow-xl z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animations */}
      <style>
        {`
          @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-orbit { animation: orbit 25s linear infinite; }

          @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

          .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-stops)); }
        `}
      </style>
    </main>
  );
};

export default Hero;
