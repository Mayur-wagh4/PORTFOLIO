import React from "react";
import { services } from "../constants/constants";

const ServiceCard = ({ title, icon }) => (
  <div className="w-full max-w-[250px] transform transition-transform hover:scale-105">
    <div className="w-full bg-gradient-to-r from-teal-500 to-blue-500 p-[1px] rounded-lg shadow-lg">
      <div className="bg-white rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-gray-800 text-xl font-semibold text-center">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div>
          <p className="text-teal-300 text-lg">Introduction</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Overview</h2>
        </div>

        {/* Content */}
        <p className="mt-8 text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
          I&apos;m Mayur Prakash Wagh, a DevOps Engineer with hands-on experience
          in deploying scalable platforms and optimizing operations. At
          GetToHire.com, I designed and hosted a React-based platform on AWS EC2,
          developed CI/CD pipelines using Jenkins, Docker, and Terraform, and
          reduced deployment time by 70%. I also ensured 99.9% system uptime by
          integrating the ELK Stack for monitoring and reliability while
          implementing Ansible for seamless configuration management.
          
          <br /><br />
          
          Previously, as a Frontend Developer Intern at Jio Platforms Limited, I
          built a responsive inventory management system using React. I
          implemented bulk data import functionality with Dropzone for Excel file
          handling and collaborated with backend teams to integrate APIs
          efficiently, ensuring real-time data updates and an improved user
          experience.
          
          <br /><br />
          
          I focus on creating reliable systems and delivering impactful solutions
          by combining technical expertise with a commitment to continuous
          improvement.
        </p>

        {/* Service Cards */}
        <div className="mt-16 grid grid-cols-1 overflow-clip sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;