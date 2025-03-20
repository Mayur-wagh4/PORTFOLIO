import React from "react";
import { FaAws, FaDocker, FaEnvelope, FaFileAlt, FaGithub, FaGitlab, FaJenkins, FaLinux, FaProjectDiagram, FaTerminal } from "react-icons/fa";
import { SiAnsible, SiGrafana, SiKubernetes, SiPrometheus, SiTerraform } from "react-icons/si";
import { profile } from "../assets/index.js";

const Hero = () => {
  // Define icons with custom positions for better distribution
  const floatingIcons = [
    { Icon: FaAws, top: "15%", left: "8%", size: "text-5xl", delay: "0s" },
    { Icon: FaDocker, top: "25%", right: "12%", size: "text-4xl", delay: "1s" },
    { Icon: SiKubernetes, top: "70%", left: "15%", size: "text-5xl", delay: "0.5s" },
    { Icon: FaGitlab, top: "22%", left: "25%", size: "text-4xl", delay: "1.5s" },
    { Icon: FaJenkins, bottom: "30%", right: "18%", size: "text-5xl", delay: "0.8s" },
    { Icon: SiTerraform, top: "45%", left: "12%", size: "text-4xl", delay: "1.2s" },
    { Icon: SiAnsible, top: "10%", right: "25%", size: "text-4xl", delay: "0.3s" },
    { Icon: SiPrometheus, bottom: "20%", right: "8%", size: "text-4xl", delay: "1.7s" },
    { Icon: SiGrafana, top: "60%", right: "28%", size: "text-5xl", delay: "0.7s" },
    { Icon: FaLinux, bottom: "25%", left: "28%", size: "text-4xl", delay: "1.3s" },
    { Icon: FaGithub, top: "35%", right: "5%", size: "text-5xl", delay: "0.2s" },
    { Icon: FaTerminal, bottom: "12%", left: "45%", size: "text-4xl", delay: "0.9s" },
  ];

  return (
    <main className="h-[100vh] w-full overflow-hidden bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.1)] relative">
      {/* Floating DevOps Icons with better distribution */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => {
          const { Icon, top, left, right, bottom, size, delay } = item;
          return (
            <Icon
              key={index}
              className={`absolute text-white/20 ${size} animate-float`}
              style={{ 
                top: top || "auto", 
                left: left || "auto", 
                right: right || "auto", 
                bottom: bottom || "auto",
                animationDelay: delay
              }}
            />
          );
        })}
      </div>

      <div className="h-full w-full flex items-center justify-center px-6 lg:px-8 mt-12 md:mt-0">

        <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className="md:w-3/5 flex flex-col gap-4 lg:gap-6 overflow:hidden ">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center md:text-left leading-tight w-full max-w-4xl">

              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">Mayur Wagh</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 text-center md:text-left max-w-2xl leading-relaxed">
              DevOps Engineer and Frontend Developer specializing in <span className="text-teal-300">AWS cloud services</span>, <span className="text-blue-300">CI/CD pipelines</span>, and <span className="text-indigo-300">infrastructure automation</span>.
            </p>

            <p className="text-lg sm:text-xl lg:text-2xl text-teal-300 font-medium text-center md:text-left">
              AWS Cloud & DevOps Engineer
            </p>

            {/* DevOps Keywords */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-1">
              {["Kubernetes", "Docker", "Terraform", "CI/CD", "AWS", "GitOps"].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-800/40 rounded-full text-gray-300 text-sm border border-gray-700/50">
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons with appropriate icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 overflow-hidden">
              <a href="#projects" className="flex items-center gap-2 px-6 py-3 text-base lg:text-lg rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-teal-500/25">
                <FaProjectDiagram className="text-white text-xl" />
                <span>Projects</span>
              </a>

              <a href="#contact" className="flex items-center gap-2 px-6 py-3 text-base lg:text-lg rounded-lg border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-teal-400/25">
                <FaEnvelope className="text-teal-400 text-xl group-hover:text-white" />
                <span>Contact</span>
              </a>

              <a href="/mayur_resume.pdf" download className="flex items-center gap-2 px-6 py-3 text-base lg:text-lg rounded-lg bg-indigo-600 text-white hover:opacity-90 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-indigo-600/25">
                <FaFileAlt className="text-white text-xl" />
                <span>Resume</span>
              </a>

              <a href="https://github.com/Mayur-wagh4" className="flex items-center gap-2 px-6 py-3 text-base lg:text-lg rounded-lg border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-teal-400/25">
                <FaGithub className="text-teal-400 text-xl group-hover:text-white" />
                <span>GitHub</span>
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