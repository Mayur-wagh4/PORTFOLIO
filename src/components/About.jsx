import React from "react";
import { services } from "../constants/constants";

const ServiceCard = ({ title, icon }) => (
  <div className="w-full max-w-[220px] transform transition-transform hover:scale-105">
    <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-[1px] rounded-lg shadow-md">
      <div className="bg-white rounded-lg py-4 px-6 min-h-[180px] flex flex-col items-center justify-center">
        <img src={icon} alt={title} className="w-12 h-12 object-contain mb-3" />
        <h3 className="text-gray-800 text-lg font-medium text-center">{title}</h3>
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
          <p className="text-teal-300 text-lg">DevOps Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Infrastructure & Automation Specialist</h2>
        </div>

        {/* Content */}
        <p className="mt-8 text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
          I'm Mayur Prakash Wagh, a DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and containerization. With expertise in AWS, Docker, Kubernetes, and Terraform, I build resilient systems that scale efficiently while reducing operational overhead.
          
          <br /><br />
          
          At GetToHire.com, I architected a high-availability infrastructure on AWS that supports thousands of concurrent users with 99.9% uptime. By implementing Infrastructure as Code with Terraform and automating deployments through Jenkins pipelines, I reduced deployment cycles by 70% while eliminating configuration drift through Ansible automation. My monitoring solutions using the ELK Stack ensure proactive issue resolution before users are affected.
          
          <br /><br />
          
          I bridge the gap between development and operations by optimizing both workflow efficiency and system performance. My approach combines technical excellence with pragmatic problem-solving to deliver infrastructure that enables business growth rather than constraining it.
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